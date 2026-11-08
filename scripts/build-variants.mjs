// Writes the fixed palettes, themes/cortado-dark.css and themes/cortado-light.css,
// from themes/cortado.css, which follows bb's light or dark mode. Each fixed
// palette applies one mode's colors in both modes. Run `npm run build` after
// editing themes/cortado.css; `npm run check` fails when the files are stale.
import { readFileSync, writeFileSync } from "node:fs";
import { pathToFileURL } from "node:url";

const root = new URL("../themes/", import.meta.url);
const css = readFileSync(new URL("cortado.css", root), "utf8");
const body = (selector) => {
  const start = css.indexOf(`\n${selector} {`) + 1;
  if (start < 1) throw new Error(`missing block ${selector}`);
  const open = css.indexOf("{", start) + 1;
  return css.slice(open, css.indexOf("\n}", open));
};
const shared = body(":root, .light, .dark");

export function variant(mode) {
  const palette = body(mode === "dark" ? ".dark" : ":root, .light");
  const code = body(mode === "dark" ? ".dark .bb-code-highlight.bb-code-highlight" : ".light .bb-code-highlight.bb-code-highlight");
  return `/* Cortado ${mode === "dark" ? "Dark" : "Light"}: the ${mode} palette of Cortado in both of bb's modes.
   Generated from themes/cortado.css by scripts/build-variants.mjs. Do not edit. */

:root, .light, .dark {${shared}
${palette}
}

.bb-code-highlight.bb-code-highlight,
.light .bb-code-highlight.bb-code-highlight,
.dark .bb-code-highlight.bb-code-highlight {${code}
}
`;
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  for (const mode of ["dark", "light"]) writeFileSync(new URL(`cortado-${mode}.css`, root), variant(mode));
  console.log("wrote themes/cortado-dark.css and themes/cortado-light.css");
}
