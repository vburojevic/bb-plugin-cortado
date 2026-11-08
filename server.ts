// bb-plugin-cortado: three themes, declared in package.json under `bb.themes`.
// bb reads the stylesheet and code theme from the manifest, so the backend
// has nothing to do. bb still requires a server entry.
import type { BbPluginApi } from "@get-bb/plugin-sdk";

export default function plugin(_bb: BbPluginApi) {}
