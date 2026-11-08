// Renders the README images from the theme itself: the logo (dark and light),
// the palette card and the code card, each in a dark and a light
// version. Every color is read from themes/cortado.css and the code themes, so
// the images can't drift from what the plugin ships. Run `npm run images`.
import fs from "node:fs";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import opentype from "opentype.js";
const require = createRequire(import.meta.url);
const ROOT = fileURLToPath(new URL("..", import.meta.url));
const OUT = ROOT + "assets", CSS_PATH = ROOT + "themes/cortado.css", CSS = fs.readFileSync(CSS_PATH, "utf8");
const F = (p) => { const b = fs.readFileSync(require.resolve(p)); return opentype.parse(b.buffer.slice(b.byteOffset, b.byteOffset + b.length)); };
const inter600 = F("@fontsource/inter/files/inter-latin-600-normal.woff");
const inter500 = F("@fontsource/inter/files/inter-latin-500-normal.woff");
const fira = F("@fontsource/fira-code/files/fira-code-latin-500-normal.woff");

// theme tokens, read from the stylesheet so the images always match the theme
const block = (sel) => { const i = CSS.indexOf(`\n${sel} {`) + 1; return CSS.slice(i, CSS.indexOf("}", i)); };
const tok = (txt, name) => { const m = txt.match(new RegExp(`--${name}:\\s*(#[0-9a-f]{6})`, "i")); if (!m) throw new Error(name); return m[1]; };
const MODE = {};
for (const [mode, sel, code] of [["dark", ".dark", ".dark .bb-code-highlight.bb-code-highlight"], ["light", ":root, .light", ".light .bb-code-highlight.bb-code-highlight"]]) {
  const b = block(sel), c = block(code), t = (n) => tok(b, n);
  MODE[mode] = {
    canvas: t("canvas"), sidebar: t("sidebar"), popover: t("popover"), secondary: t("secondary"), accentFill: t("accent"),
    border: t("border"), seam: t("border-seam"), selected: t("surface-selected-border"),
    ink: t("ink"), sec: t("muted-foreground"), sub: t("subtle-foreground"),
    primary: t("primary"), onPrimary: t("primary-foreground"), warn: t("warning"), err: t("destructive-text"), ok: t("success"), file: t("file-accent"), merged: t("pr-merged"),
    kw: tok(c, "sh-keyword"), fn: tok(c, "sh-entity"), type: tok(c, "sh-class"), str: tok(c, "sh-string"), num: tok(c, "sh-jsxliterals"), prop: tok(c, "sh-property"), com: tok(c, "sh-comment"),
  };
}
const codeJson = (f) => JSON.parse(fs.readFileSync(ROOT + "themes/" + f, "utf8"));
for (const [mode, f] of [["dark", "cortado-code.json"], ["light", "cortado-code-light.json"]]) {
  const j = codeJson(f);
  MODE[mode].op = j.tokenColors.find((t) => t.scope.includes("keyword.operator")).settings.foreground;
  MODE[mode].editor = j.colors["editor.background"]; MODE[mode].line = j.colors["editor.lineHighlightBackground"]; MODE[mode].lnum = j.colors["editorLineNumber.foreground"];
}

function text(font, str, x, y, size, { track = 0, align = "start", fill = "#000" } = {}) {
  const glyphs = font.stringToGlyphs(str), scale = size / font.unitsPerEm;
  let w = 0;
  glyphs.forEach((g, i) => { w += g.advanceWidth * scale + (i < glyphs.length - 1 ? track * size + font.getKerningValue(g, glyphs[i + 1]) * scale : 0); });
  let cx = align === "middle" ? x - w / 2 : align === "end" ? x - w : x, d = "";
  glyphs.forEach((g, i) => { d += g.getPath(cx, y, size).toPathData(1); cx += g.advanceWidth * scale + track * size; if (i < glyphs.length - 1) cx += font.getKerningValue(g, glyphs[i + 1]) * scale; });
  return { svg: `<path d="${d}" fill="${fill}"/>`, width: w };
}
const arc = (r, a0, a1) => { const p = (a) => [r * Math.cos((a * Math.PI) / 180), r * Math.sin((a * Math.PI) / 180)].map((v) => v.toFixed(1)).join(" "); return `M${p(a0)}A${r} ${r} 0 0 1 ${p(a1)}`; };

// The mark: a cortado seen from above. A flat cup and handle, its surface split by
// one S-curve into amber crema and steamed milk: dark and light in one cup.
function mark(mode) {
  const L = mode === "light";
  const cup = L ? "#ffffff" : "#2a2a2e", rim = L ? "#d6d6d9" : "#ffffff", rimOp = L ? 1 : 0.10, ring = L ? "#000000" : "#ffffff";
  const r = 112, split = `M ${-r} 0 A ${r / 2} ${r / 2} 0 0 1 0 0 A ${r / 2} ${r / 2} 0 0 0 ${r} 0 A ${r} ${r} 0 0 0 ${-r} 0 Z`;
  return `<defs>
    <linearGradient id="amb" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffc85a"/><stop offset=".55" stop-color="#ffb334"/><stop offset="1" stop-color="#f08a24"/></linearGradient>
    <linearGradient id="milk" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fffaf2"/><stop offset="1" stop-color="#efe2cc"/></linearGradient>
    <clipPath id="surface"><circle r="${r}"/></clipPath></defs>
  <g transform="translate(232 256)">
    <circle r="196" fill="none" stroke="${ring}" stroke-opacity="${L ? 0.06 : 0.07}" stroke-width="3"/>
    <rect x="132" y="-22" width="84" height="44" rx="22" fill="${cup}" stroke="${rim}" stroke-opacity="${rimOp}" stroke-width="2"/>
    <circle r="148" fill="${cup}" stroke="${rim}" stroke-opacity="${rimOp}" stroke-width="2"/>
    <circle r="${r + 8}" fill="#3a1f08"/>
    <g clip-path="url(#surface)" transform="rotate(-35)"><circle r="${r}" fill="url(#amb)"/><path d="${split}" fill="url(#milk)"/></g>
  </g>`;
}

for (const mode of ["dark", "light"]) {
  const M = MODE[mode], L = mode === "light", sfx = L ? "-light" : "";
  // app icon
  const bg = L ? ["#ffffff", "#f0f0f1"] : ["#1a1a1c", "#0a0a0b"];
  fs.writeFileSync(`${OUT}/logo${sfx}.svg`, `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs><linearGradient id="bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${bg[0]}"/><stop offset="1" stop-color="${bg[1]}"/></linearGradient></defs>
  <rect width="512" height="512" rx="114" fill="url(#bg)"/>
  <rect x="1" y="1" width="510" height="510" rx="113" fill="none" stroke="${L ? "#000" : "#fff"}" stroke-opacity="${L ? 0.08 : 0.07}" stroke-width="2"/>
  ${mark(mode)}
</svg>`);

  // palette
  {
    const W = 1280, H = 820, tw = 150, gap = 14;
    let s = "";
    const label = (x, y, n, hex) => text(inter500, n, x, y, 19, { fill: M.ink }).svg + text(fira, hex, x, y + 27, 16, { fill: M.sub }).svg;
    s += text(inter600, "Surfaces and lines", 64, 92, 26, { fill: M.ink, track: -0.01 }).svg;
    s += text(inter500, L ? "The sidebar sits one step grayer than the white chat." : "The sidebar sits one step above the chat, as macOS raises it.", 64, 124, 18, { fill: M.sec }).svg;
    const surf = [["Chat", M.canvas], ["Sidebar, code", M.sidebar], ["Menus", M.popover], ["Buttons", M.secondary], ["Hover", M.accentFill], ["Lines", M.border], ["Selected outline", M.selected]];
    const base = 340;
    surf.forEach(([n, c], i) => {
      const x = 64 + i * (tw + gap), h = 110 + i * 14;
      if (i === 6) s += `<rect x="${x + 1}" y="${base - h + 1}" width="${tw - 2}" height="${h - 2}" rx="11" fill="${M.sidebar}" stroke="${c}" stroke-width="2"/>`;
      else s += `<rect x="${x}" y="${base - h}" width="${tw}" height="${h}" rx="12" fill="${c}" stroke="${L ? "#000" : "#fff"}" stroke-opacity="${L ? 0.13 : (i === 0 ? 0.14 : 0.07)}"/>`;
      s += label(x, base + 34, n, c);
    });
    const ay = 480;
    s += text(inter600, "Accents and status", 64, ay, 26, { fill: M.ink, track: -0.01 }).svg;
    [["Accent", M.primary], ["Warnings", M.warn], ["Success", M.ok], ["Errors", M.err], ["File paths", M.file], ["Merged", M.merged]].forEach(([n, c], i) => {
      const x = 64 + i * (tw + gap);
      s += `<circle cx="${x + 24}" cy="${ay + 58}" r="24" fill="${c}"/>` + label(x, ay + 118, n, c);
    });
    const ty = 742;
    [["Body", M.ink], ["Secondary", M.sec], ["Subtle", M.sub]].forEach(([n, c], i) => {
      const x = 64 + i * 2 * (tw + gap);
      s += text(inter600, "Aa", x, ty, 40, { fill: c, track: -0.02 }).svg + text(inter500, n, x + 66, ty - 18, 18, { fill: M.ink }).svg + text(fira, c, x + 66, ty + 6, 15, { fill: M.sub }).svg;
    });
    fs.writeFileSync(`${OUT}/palette${sfx}.svg`, `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
  <rect x=".5" y=".5" width="${W - 1}" height="${H - 1}" rx="22" fill="${M.canvas}" stroke="${L ? M.border : M.seam}"/>
  <rect x="32" y="${ay - 66}" width="${W - 64}" height="1" fill="${M.seam}"/><rect x="32" y="${ty - 84}" width="${W - 64}" height="1" fill="${M.seam}"/>
  ${s}
</svg>`);
  }

  // code
  {
    const W = 1280, H = 380, lh = 44, x0 = 128, y0 = 138, size = 23;
    const K = M.kw, FN = M.fn, T = M.type, S = M.str, N = M.num, P = M.prop, O = M.op, I = M.ink, C = M.com;
    const lines = [
      [["// Equal parts espresso and milk.", C]],
      [["export ", K], ["function ", K], ["pour", FN], ["(", I], ["shot", I], [": ", O], ["Espresso", T], [", ", I], ["milk", I], [": ", O], ["number", T], ["): ", O], ["Cortado", T], [" {", I]],
      [["  const ", K], ["ratio", I], [" = ", O], ["milk", I], [" / ", O], ["shot", I], [".", O], ["ml", P], [";", I]],
      [["  return ", K], ["{ ", I], ["shot", I], [", ", I], ["milk", I], [", ", I], ["balanced", P], [": ", O], ["ratio", I], [" === ", O], ["1", N], [", ", I], ["note", P], [": ", O], ['"caramel"', S], [" };", I]],
      [["}", I]],
    ];
    const adv = (fira.charToGlyph("m").advanceWidth / fira.unitsPerEm) * size;
    let s = "";
    lines.forEach((toks, i) => {
      const y = y0 + i * lh;
      if (i === 2) s += `<rect x="1" y="${y - 30}" width="${W - 2}" height="${lh}" fill="${M.line}"/>`;
      s += text(fira, String(i + 1), x0 - 36, y, size, { fill: i === 2 ? M.sec : M.lnum, align: "end" }).svg;
      let col = 0;
      for (const [t, c] of toks) { const lead = t.length - t.trimStart().length, body = t.trimStart(); if (body) s += text(fira, body, x0 + (col + lead) * adv, y, size, { fill: c }).svg; col += t.length; }
    });
    const file = text(fira, "src/cortado.ts", 64, 52, 18, { fill: M.file });
    fs.writeFileSync(`${OUT}/code${sfx}.svg`, `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
  <defs><clipPath id="c"><rect width="${W}" height="${H}" rx="22"/></clipPath></defs>
  <g clip-path="url(#c)">
    <rect width="${W}" height="${H}" fill="${M.editor}"/>
    <rect width="${W}" height="78" fill="${M.ink}" fill-opacity=".03"/><rect y="78" width="${W}" height="1" fill="${M.seam}"/>
    <path d="M38 36h10l5 5v13H38z" fill="none" stroke="${M.sub}" stroke-width="1.8" stroke-linejoin="round"/>
    ${file.svg}${s}
  </g>
  <rect x=".5" y=".5" width="${W - 1}" height="${H - 1}" rx="21.5" fill="none" stroke="${L ? M.border : M.seam}"/>
</svg>`);
  }
}
console.log("wrote assets/logo, palette and code images, dark and light");
