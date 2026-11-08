// Builds assets/hero.svg, the animated README hero: one bb window that holds in
// Cortado Dark, then an amber seam sweeps across and leaves Cortado Light, holds,
// and sweeps back. The two frames are the full-size thread screenshots, embedded
// as PNG data so the SVG works inside GitHub's <img>. SMIL animation runs there;
// the README serves the still hero.png to readers who prefer reduced motion.
import fs from "node:fs";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const frame = (mode) => "data:image/png;base64," + fs.readFileSync(`${ROOT}assets/full/thread-${mode}.png`).toString("base64");
const W = 2480, H = 1560, R = 36, slant = 0.24 * W;
const out = W + slant, inn = -slant; // seam x at the top: off the right edge (all dark), off the left edge (all light)
const ease = "0.65 0 0.35 1", hold = "0 0 1 1";
// 10 s loop: hold dark 2 s, sweep 2 s, hold light 3 s, sweep 2 s, hold dark 1 s
const anim = `<animateTransform attributeName="transform" type="translate" dur="10s" repeatCount="indefinite"
      values="${out} 0; ${out} 0; ${inn} 0; ${inn} 0; ${out} 0; ${out} 0" keyTimes="0; 0.2; 0.4; 0.7; 0.9; 1"
      calcMode="spline" keySplines="${hold}; ${ease}; ${hold}; ${ease}; ${hold}"/>`;
const seam = `M 0 0 L ${-slant} ${H}`;
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
  <defs>
    <clipPath id="window"><rect width="${W}" height="${H}" rx="${R}"/></clipPath>
    <clipPath id="light"><path d="M 0 0 H ${W * 3} V ${H} H ${-slant} Z">${anim}</path></clipPath>
    <filter id="glow" x="-20%" y="-5%" width="140%" height="110%"><feGaussianBlur stdDeviation="14"/></filter>
  </defs>
  <g clip-path="url(#window)">
    <image width="${W}" height="${H}" href="${frame("dark")}"/>
    <image width="${W}" height="${H}" href="${frame("light")}" clip-path="url(#light)"/>
    <g>
      <path d="${seam}" stroke="#ffb334" stroke-width="16" stroke-opacity=".55" filter="url(#glow)"/>
      <path d="${seam}" stroke="#ffc86a" stroke-width="5"/>
      ${anim}
    </g>
  </g>
  <rect x="1.5" y="1.5" width="${W - 3}" height="${H - 3}" rx="${R - 1}" fill="none" stroke="#55555a" stroke-width="3"/>
</svg>
`;
fs.writeFileSync(`${ROOT}assets/hero.svg`, svg);
console.log(`wrote assets/hero.svg (${Math.round(svg.length / 1024)} KB)`);
