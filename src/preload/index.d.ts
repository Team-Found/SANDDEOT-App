import { ElectronAPI } from "@electron-toolkit/preload";
import { Modules } from "../main/utils/db/types/modules.d.ts";
import RssRes from "../main/utils/api/types/insert/rssRes.d.ts";

declare global {
  interface Window {
    electron: ElectronAPI;
    api: {
      resolveRequire: (module: string) => string;
      insertRss: (RSSUrl: string) => Promise<RssRes>;
    };
    dbApi: Modules;
  }
}
