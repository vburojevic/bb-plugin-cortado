// Checks Cortado's colors against WCAG contrast floors, in light and dark.
// Reads the hex values straight from themes/cortado.css (the ":root, .light"
// block, the ".dark" block, and each mode's code colors) and exits 1 when any
// pair falls below its floor. Run it after every edit to the theme.
import { readFileSync } from "node:fs";
import { variant } from "./build-variants.mjs";

const all = readFileSync(new URL("../themes/cortado.css", import.meta.url), "utf8");
const block = (selector) => {
  const start = all.indexOf(`\n${selector} {`) + 1;
  if (start < 1) throw new Error(`missing block ${selector}`);
  return all.slice(start, all.indexOf("}", start));
};
const MODES = {
  light: block(":root, .light") + block(".light .bb-code-highlight.bb-code-highlight"),
  dark: block(".dark") + block(".dark .bb-code-highlight.bb-code-highlight"),
};
let css = "";
const token = (name) => {
  const m = css.match(new RegExp(`--${name}:\\s*(#[0-9a-f]{6})`, "i"));
  if (!m) throw new Error(`missing --${name}`);
  return m[1];
};

const hexToRgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
const toLin = (c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
const lum = (rgb) => {
  const [r, g, b] = rgb.map(toLin);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const ratio = (a, b) => {
  const [hi, lo] = [lum(a), lum(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};

function checksFor() {
  const canvas = hexToRgb(token("canvas"));
  const ink = hexToRgb(token("ink"));
  const tier = (n) => hexToRgb(token(n));
  const inputBorder = () => hexToRgb(token("input"));
  const searchMatch = () => hexToRgb(token("sidebar-search-match"));

  const checks = [
    ["ink on canvas", ink, canvas, 4.5],
    ["muted text on canvas", tier("muted-foreground"), canvas, 4.5],
    ["readback text on canvas", tier("readback-foreground"), canvas, 4.5],
    ["subtle text on canvas", tier("subtle-foreground"), canvas, 3],
    ["accent on canvas", hexToRgb(token("primary")), canvas, 4.5],
    ["text on accent", hexToRgb(token("primary-foreground")), hexToRgb(token("primary")), 4.5],
    ["file paths on canvas", hexToRgb(token("file-accent")), canvas, 4.5],
    ["error text on canvas", hexToRgb(token("destructive-text")), canvas, 4.5],
    ["text on error fill", hexToRgb(token("destructive-foreground")), hexToRgb(token("destructive")), 4.5],
    ["warning text on canvas", hexToRgb(token("warning-text")), canvas, 4.5],
    ["success on canvas", hexToRgb(token("success")), canvas, 4.5],
    ["merged on canvas", hexToRgb(token("pr-merged")), canvas, 4.5],
    ["code comments on canvas", hexToRgb(token("sh-comment")), canvas, 3],
    ["ink on sidebar", ink, hexToRgb(token("sidebar")), 4.5],
    ["ink on popover", ink, hexToRgb(token("popover")), 4.5],
    ["subtle text on popover", tier("subtle-foreground"), hexToRgb(token("popover")), 3],
    ["ink on sidebar search match", ink, searchMatch(), 4.5],
    ["input borders on canvas", inputBorder(), canvas, 3],
    ["secondary button fill on canvas", hexToRgb(token("secondary")), canvas, 1.1],
    ["text on secondary button", ink, hexToRgb(token("secondary")), 7],
    ["text on hovered row", ink, hexToRgb(token("accent")), 7],
    ["menus over the sidebar", hexToRgb(token("popover")), hexToRgb(token("sidebar")), 1.1],
    ["secondary button fill on menus", hexToRgb(token("secondary")), hexToRgb(token("popover")), 1.08],
    ["code comments on the sidebar", hexToRgb(token("sh-comment")), hexToRgb(token("sidebar")), 3],
    ["selected outline against borders", hexToRgb(token("surface-selected-border")), hexToRgb(token("border")), 3],
    ["secondary text on popover", tier("muted-foreground"), hexToRgb(token("popover")), 4.5],
  ];
  return checks;
}

const rows = [];
for (const [mode, text] of Object.entries(MODES)) {
  css = text;
  for (const [name, fg, bg, floor] of checksFor()) {
    const r = ratio(fg, bg);
    rows.push({ mode, name, ratio: Math.round(r * 100) / 100, floor, pass: r >= floor });
  }
}
if (process.argv.includes("--json")) console.log(JSON.stringify(rows, null, 2));
else for (const r of rows) console.log(`${r.pass ? "pass" : "FAIL"}  ${r.mode.padEnd(5)}  ${r.ratio.toFixed(2)}:1  (floor ${r.floor})  ${r.name}`);
// The fixed palettes must match what build-variants.mjs writes from cortado.css.
let stale = false;
for (const mode of ["dark", "light"]) {
  const file = new URL(`../themes/cortado-${mode}.css`, import.meta.url);
  if (readFileSync(file, "utf8") !== variant(mode)) { console.log(`FAIL  themes/cortado-${mode}.css is stale: run npm run build`); stale = true; }
}
process.exit(rows.every((r) => r.pass) && !stale ? 0 : 1);
