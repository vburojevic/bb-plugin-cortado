<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/wordmark-dark.svg">
    <img src="assets/wordmark-light.svg" width="380" alt="Cortado">
  </picture>
</p>

<p align="center"><b>Graphite and amber for <a href="https://getbb.app">bb</a>, in light and dark.</b></p>

<p align="center">
<a href="https://github.com/vburojevic/bb-plugin-cortado/releases/latest"><picture><source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/github/v/release/vburojevic/bb-plugin-cortado?style=flat-square&label=release&color=ffb334&labelColor=1c1c1e"><img src="https://img.shields.io/github/v/release/vburojevic/bb-plugin-cortado?style=flat-square&label=release&color=a86200&labelColor=e8e8ea" alt="Latest release"></picture></a>
<a href="https://getbb.app"><picture><source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/bb-%E2%89%A50.48-ffb334?style=flat-square&labelColor=1c1c1e"><img src="https://img.shields.io/badge/bb-%E2%89%A50.48-a86200?style=flat-square&labelColor=e8e8ea" alt="Requires bb 0.48 or later"></picture></a>
<a href="LICENSE"><picture><source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/license-MIT-ffb334?style=flat-square&labelColor=1c1c1e"><img src="https://img.shields.io/badge/license-MIT-a86200?style=flat-square&labelColor=e8e8ea" alt="MIT license"></picture></a>
<a href="#contrast"><picture><source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/contrast-52%2F52%20pass-ffb334?style=flat-square&labelColor=1c1c1e"><img src="https://img.shields.io/badge/contrast-52%2F52%20pass-a86200?style=flat-square&labelColor=e8e8ea" alt="All 52 contrast checks pass"></picture></a>
<a href="#three-palettes"><picture><source media="(prefers-color-scheme: dark)" srcset="https://img.shields.io/badge/palettes-3-ffb334?style=flat-square&labelColor=1c1c1e"><img src="https://img.shields.io/badge/palettes-3-a86200?style=flat-square&labelColor=e8e8ea" alt="Three palettes"></picture></a>
</p>

<a href="assets/full/hero.png?raw=true"><img src="assets/screens/hero.png" width="100%" alt="One bb thread in Cortado, split along a diagonal: Cortado Dark on the left, Cortado Light on the right, with a thin amber seam. The chat shows a reply with a list, a table and a TypeScript block."></a>

<p align="center"><sub>One bb window, Cortado Dark on the left and Cortado Light on the right. <a href="assets/full/hero.png?raw=true">Open full size</a></sub></p>

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/divider-dark.svg">
    <img src="assets/divider-light.svg" width="100%" alt="">
  </picture>
</p>

## Install

```sh
bb plugin install git:github.com/vburojevic/bb-plugin-cortado@v1.0.0 --yes
```

> [!TIP]
> Then pick it under **Settings → Appearance → Palette**, or from a terminal:
>
> ```sh
> bb theme set plugin:cortado:cortado
> ```

<sub>Code renders in <a href="https://github.com/tonsky/FiraCode">Fira Code</a> and the terminal in <a href="https://www.nerdfonts.com/font-downloads">FiraCode Nerd Font Mono</a>. Install both, or bb falls back to your system's monospace font.</sub>

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/divider-dark.svg">
    <img src="assets/divider-light.svg" width="100%" alt="">
  </picture>
</p>

## Three palettes

<p align="center">
<a href="assets/full/hero.png?raw=true"><img src="assets/card-cortado.svg" width="272" alt="Cortado: the palette's name, a code sample and its swatches."></a>
<a href="assets/full/thread-dark.png?raw=true"><img src="assets/card-dark.svg" width="272" alt="Cortado Dark: the palette's name, a code sample and its swatches."></a>
<a href="assets/full/thread-light.png?raw=true"><img src="assets/card-light.svg" width="272" alt="Cortado Light: the palette's name, a code sample and its swatches."></a>
</p>

<p align="center"><code>cortado</code> · <code>cortado-dark</code> · <code>cortado-light</code></p>

**Cortado** follows bb's Light, Dark or System setting. **Cortado Dark** and **Cortado Light** keep one palette whichever way that switch is set. Each recolors the app, the syntax colors in chat, diffs and file previews, and the 16 terminal colors.

```sh
bb theme set plugin:cortado:cortado         # follows bb's mode
bb theme set plugin:cortado:cortado-dark    # always dark
bb theme set plugin:cortado:cortado-light   # always light
```

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/divider-dark.svg">
    <img src="assets/divider-light.svg" width="100%" alt="">
  </picture>
</p>

## A closer look

### Diffs and file previews

bb draws diffs, file previews and the file editor with a code theme of its own. Cortado brings one for each mode, drawn from the same palette as code in chat.

<a href="assets/full/diff-dark.png?raw=true#gh-dark-mode-only"><img src="assets/screens/diff-dark.png#gh-dark-mode-only" width="100%" alt="bb's diff panel beside a thread: README.md with one line changed and src/greet.ts with five added lines."></a><a href="assets/full/diff-light.png?raw=true#gh-light-mode-only"><img src="assets/screens/diff-light.png#gh-light-mode-only" width="100%" alt="bb's diff panel beside a thread: README.md with one line changed and src/greet.ts with five added lines."></a>
<p align="center"><sub>Full size: <a href="assets/full/diff-dark.png?raw=true">dark</a> · <a href="assets/full/diff-light.png?raw=true">light</a></sub></p>

### Right in Settings

All three palettes appear under **Settings → Appearance → Palette**, next to bb's built-in ones.

<a href="assets/full/palettes-dark.png?raw=true#gh-dark-mode-only"><img src="assets/screens/palettes-dark.png#gh-dark-mode-only" width="100%" alt="bb's Settings, Appearance page, with the Palette menu open on Cortado, Cortado Dark and Cortado Light."></a><a href="assets/full/palettes-light.png?raw=true#gh-light-mode-only"><img src="assets/screens/palettes-light.png#gh-light-mode-only" width="100%" alt="bb's Settings, Appearance page, with the Palette menu open on Cortado, Cortado Dark and Cortado Light."></a>
<p align="center"><sub>Full size: <a href="assets/full/palettes-dark.png?raw=true">dark</a> · <a href="assets/full/palettes-light.png?raw=true">light</a></sub></p>

### Warm where it counts

Amber marks what matters: search matches, the unread line and primary buttons.

<a href="assets/full/search-dark.png?raw=true#gh-dark-mode-only"><img src="assets/screens/search-dark.png#gh-dark-mode-only" width="100%" alt="Thread search for greet with three results; the matched word is highlighted in amber."></a><a href="assets/full/search-light.png?raw=true#gh-light-mode-only"><img src="assets/screens/search-light.png#gh-light-mode-only" width="100%" alt="Thread search for greet with three results; the matched word is highlighted in amber."></a>
<p align="center"><sub>Full size: <a href="assets/full/search-dark.png?raw=true">dark</a> · <a href="assets/full/search-light.png?raw=true">light</a></sub></p>

### Depth you can read

Menus sit one step above the sidebar and the sidebar one step above the chat, so every layer separates without heavy borders.

<a href="assets/full/menu-dark.png?raw=true#gh-dark-mode-only"><img src="assets/screens/menu-dark.png#gh-dark-mode-only" width="100%" alt="The navigation menu open over the sidebar, beside a thread."></a><a href="assets/full/menu-light.png?raw=true#gh-light-mode-only"><img src="assets/screens/menu-light.png#gh-light-mode-only" width="100%" alt="The navigation menu open over the sidebar, beside a thread."></a>
<p align="center"><sub>Full size: <a href="assets/full/menu-dark.png?raw=true">dark</a> · <a href="assets/full/menu-light.png?raw=true">light</a></sub></p>

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/divider-dark.svg">
    <img src="assets/divider-light.svg" width="100%" alt="">
  </picture>
</p>

## On your phone

bb's phone layout gets the same palette, in both modes. Tap a phone for its full-size screen.

<p align="center">
<a href="assets/full/thread-phone-dark.png?raw=true#gh-dark-mode-only"><img src="assets/screens/thread-phone-dark.png#gh-dark-mode-only" width="250" alt="A thread on a phone in Cortado."></a><a href="assets/full/thread-phone-light.png?raw=true#gh-light-mode-only"><img src="assets/screens/thread-phone-light.png#gh-light-mode-only" width="250" alt="A thread on a phone in Cortado."></a>
<a href="assets/full/plan-phone-dark.png?raw=true#gh-dark-mode-only"><img src="assets/screens/plan-phone-dark.png#gh-dark-mode-only" width="250" alt="A numbered plan on a phone in Cortado."></a><a href="assets/full/plan-phone-light.png?raw=true#gh-light-mode-only"><img src="assets/screens/plan-phone-light.png#gh-light-mode-only" width="250" alt="A numbered plan on a phone in Cortado."></a>
<a href="assets/full/settings-phone-dark.png?raw=true#gh-dark-mode-only"><img src="assets/screens/settings-phone-dark.png#gh-dark-mode-only" width="250" alt="Settings on a phone in Cortado."></a><a href="assets/full/settings-phone-light.png?raw=true#gh-light-mode-only"><img src="assets/screens/settings-phone-light.png#gh-light-mode-only" width="250" alt="Settings on a phone in Cortado."></a>
</p>

<p align="center"><sub>A thread, a numbered plan and Settings. Full size: Thread <a href="assets/full/thread-phone-dark.png?raw=true">dark</a> / <a href="assets/full/thread-phone-light.png?raw=true">light</a> · Plan <a href="assets/full/plan-phone-dark.png?raw=true">dark</a> / <a href="assets/full/plan-phone-light.png?raw=true">light</a> · Settings <a href="assets/full/settings-phone-dark.png?raw=true">dark</a> / <a href="assets/full/settings-phone-light.png?raw=true">light</a></sub></p>

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/divider-dark.svg">
    <img src="assets/divider-light.svg" width="100%" alt="">
  </picture>
</p>

## Colors

<a href="assets/palette.svg?raw=true#gh-dark-mode-only"><img src="assets/palette.svg#gh-dark-mode-only" width="100%" alt="Cortado's surfaces, accents and text colors, with their hex values, in the current mode."></a><a href="assets/palette-light.svg?raw=true#gh-light-mode-only"><img src="assets/palette-light.svg#gh-light-mode-only" width="100%" alt="Cortado's surfaces, accents and text colors, with their hex values, in the current mode."></a>

The grays carry no tint, so the warm colors do the work. In dark mode the sidebar and side panels sit one step above the chat; in light mode they sit one step grayer than the white chat.

<a href="assets/code.svg?raw=true#gh-dark-mode-only"><img src="assets/code.svg#gh-dark-mode-only" width="100%" alt="A TypeScript snippet in Cortado's code colors: orange keywords, gold function names, teal types, green strings and violet numbers."></a><a href="assets/code-light.svg?raw=true#gh-light-mode-only"><img src="assets/code-light.svg#gh-light-mode-only" width="100%" alt="A TypeScript snippet in Cortado's code colors: orange keywords, gold function names, teal types, green strings and violet numbers."></a>

Code keeps its warmth in orange keywords and gold function names. Types, strings and numbers are teal, green and violet in diffs and file previews; in chat, numbers take the type color.

## Contrast

<a href="assets/contrast.svg?raw=true"><img src="assets/contrast.svg" width="100%" alt="Contrast scorecard for dark and light: body text 15.53 and 17.20, secondary text 7.25 and 7.30, accent 11.27 and 4.76, warnings 9.65 and 5.09, errors 7.97 and 5.70, input borders 3.03 and 3.39, code comments 4.04 and 4.34. Each bar passes its floor."></a>

`npm run check` reads every color from the stylesheet and tests 26 pairs in each mode against minimum contrast floors, most of them from WCAG. The marks show each floor; the bars run on a log scale to 21:1.

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/divider-dark.svg">
    <img src="assets/divider-light.svg" width="100%" alt="">
  </picture>
</p>

## Reference

<details>
<summary><b>Every surface, and where bb uses it</b> (18 tokens)</summary>
<br>

| Where in bb | Token | Dark | Light |
| :-- | :-- | :-- | :-- |
| Chat, thread header, composer bar | `--canvas` | `#070707` | `#ffffff` |
| Sidebar, icon rail, side panels, code | `--sidebar`, `--surface-recessed` | `#0f0f10` | `#f2f2f3` |
| Cards | `--card` | `#0f0f10` | `#f6f6f7` |
| Menus, popovers, the command palette | `--popover` | `#1c1c1e` | `#ffffff` |
| Secondary buttons, the current line in code | `--secondary` | `#252527` | `#ebebed` |
| Hovered rows in menus | `--accent` | `#2b2b2e` | `#e6e6e8` |
| Borders | `--border` | `#313134` | `#e1e1e3` |
| Input borders | `--input` | `#5c5c60` | `#8b8b90` |
| Selected cards, your own chips, quote bars | `--surface-selected-border` | `#85858a` | `#6b6b70` |
| Body text | `--ink` | `#e2e2e0` | `#1b1b1d` |
| Secondary text | `--muted-foreground` | `#9b9b9b` | `#56565b` |
| Accent, primary buttons | `--primary` | `#ffb334` | `#a86200` |
| Focus rings | `--ring` | `#ffb334` | `#b87400` |
| Warnings | `--warning` | `#ff9b50` | `#bf4712` |
| Errors | `--destructive-text` | `#fd7a86` | `#be2e4d` |
| Success, added lines | `--success` | `#71db9a` | `#107b49` |
| File paths | `--file-accent` | `#7dc9fc` | `#046eb6` |

</details>

<details>
<summary><b>Syntax colors in chat</b> (7 properties)</summary>
<br>

bb highlights code blocks in chat with [sugar-high](https://github.com/huozhi/sugar-high), which reads its colors from `--sh-*` properties. Diffs and file previews use the code theme files instead, which set numbers in violet.

| Property | Colors | Dark | Light |
| :-- | :-- | :-- | :-- |
| `--sh-keyword` | Keywords: `export`, `const`, `return` | `#fd9260` | `#b84703` |
| `--sh-entity` | Function names | `#f0cb6e` | `#8b6500` |
| `--sh-class` | Types, class names and numbers | `#55dcc8` | `#0c796e` |
| `--sh-string` | Strings | `#a6d77d` | `#487817` |
| `--sh-jsxliterals` | Text inside JSX | `#b0b2fd` | `#5951c1` |
| `--sh-property` | Properties | `#b9c6d9` | `#4b5563` |
| `--sh-comment` | Comments | `#737373` | `#717176` |

</details>

<details>
<summary><b>Terminal colors</b> (16 colors)</summary>
<br>

| # | Color | Dark | Light |
| --: | :-- | :-- | :-- |
| 0 | Black | `#3a3a3d` | `#3a3a3d` |
| 1 | Red | `#f05f5f` | `#c4262e` |
| 2 | Green | `#5fcf8c` | `#17774c` |
| 3 | Yellow | `#f0b04a` | `#a86200` |
| 4 | Blue | `#6db8f0` | `#0a6bbd` |
| 5 | Magenta | `#a99cf5` | `#6b45d1` |
| 6 | Cyan | `#52cdbd` | `#0a7a6d` |
| 7 | White | `#d0d0ce` | `#6b6b70` |
| 8 | Bright black | `#737373` | `#5f5f64` |
| 9 | Bright red | `#ff7b7b` | `#d12b33` |
| 10 | Bright green | `#7fe3a8` | `#1d8a59` |
| 11 | Bright yellow | `#ffc861` | `#b86e00` |
| 12 | Bright blue | `#8cd2ff` | `#1f7fd1` |
| 13 | Bright magenta | `#c3b1ff` | `#7c55e0` |
| 14 | Bright cyan | `#6fe3d3` | `#0d8f80` |
| 15 | Bright white | `#f2f2f0` | `#1b1b1d` |

</details>

<details>
<summary><b>How it works</b></summary>
<br>

```mermaid
flowchart LR
  css["themes/cortado.css<br/>light and dark palettes"] --> build["npm run build"]
  build --> fixed["cortado-dark.css<br/>cortado-light.css"]
  code["cortado-code.json<br/>cortado-code-light.json"] --> bb["bb: Settings → Appearance<br/>and bb theme set"]
  css --> bb
  fixed --> bb
  css --> check["npm run check<br/>52 contrast pairs"]
  css --> images["npm run images<br/>README art"]
```

The stylesheet sets bb's own theme tokens and nothing else. It never targets bb's components, so there are no selectors to break when bb changes its markup.

</details>

<details>
<summary><b>Change it</b></summary>
<br>

A local install is read live, so you can tune the theme in place:

```sh
git clone https://github.com/vburojevic/bb-plugin-cortado
cd bb-plugin-cortado && npm install
bb plugin install . --yes
```

Edit `themes/cortado.css` for the app and `themes/cortado-code.json` or `themes/cortado-code-light.json` for diffs and file previews. Then:

```sh
npm run build    # regenerate Cortado Dark and Cortado Light from cortado.css
npm run check    # contrast in both modes, and stale files
npm run images   # redraw the logo, wordmark, cards, palette and contrast art
bb theme set plugin:cortado:cortado
```

```
themes/cortado.css             light and dark palettes, shadows, fonts, terminal colors
themes/cortado-dark.css        Cortado Dark, generated
themes/cortado-light.css       Cortado Light, generated
themes/cortado-code.json       code theme for diffs and file previews, dark
themes/cortado-code-light.json code theme for diffs and file previews, light
scripts/build-variants.mjs     writes the two fixed palettes
scripts/check-contrast.mjs     the contrast check behind npm run check
scripts/render-images.mjs      draws the README art from the theme
docs/overview.md               the bb marketplace description
server.ts                      the empty server entry bb requires
assets/                        logo, glyph and drawn README art
assets/screens/                README screenshots
assets/full/                   the same screenshots at full size
```

</details>

<details>
<summary><b>About the images</b></summary>
<br>

The screenshots are captured from bb 0.49 itself, running headless with its own empty data folder and Cortado 1.0.0 installed from the release tag. The threads show an invented change to a sample file. Nothing comes from anyone's real bb. Desktop shots are taken at 2x and phone shots at 3x; the files under `assets/full/` keep that full resolution.

The wordmark, palette cards, color, code and contrast images are drawn by `npm run images`, which reads every color from `themes/cortado.css` and the code theme files. Regenerating after a palette change keeps them honest.

</details>

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/divider-dark.svg">
    <img src="assets/divider-light.svg" width="100%" alt="">
  </picture>
</p>

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/logo.svg">
    <img src="assets/logo-light.svg" width="56" alt="">
  </picture>
  <br>
  <sub>Fills and lines follow the step roles of <a href="https://www.radix-ui.com/colors/docs/palette-composition/understanding-the-scale">Radix Colors</a>. Type is <a href="https://rsms.me/inter/">Inter</a> by Rasmus Andersson and <a href="https://github.com/tonsky/FiraCode">Fira Code</a> by Nikita Prokopov. <a href="LICENSE">MIT licensed</a>.</sub>
  <br><br>
  More bb plugins at <a href="https://github.com/vburojevic/bb-plugins"><b>vburojevic/bb-plugins</b></a>
</p>
