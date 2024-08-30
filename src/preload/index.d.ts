import { ElectronAPI } from "@electron-toolkit/preload";
import { Modules } from "../main/utils/db/types/modules.d.ts";
import RssRes from "../main/utils/api/types/insert/rssRes.d.ts";

interface RecommendList {
  rssID: number;
  rssName: string;
  rssUrl: string;
  favicon: string;
  articleID: number;
  title: string;
  descript: string;
  date: number;
  thumbnail: string;
  imgList: string[];
  content: string;
  articleUrl: string;
}

declare global {
  interface Window {
    electron: ElectronAPI;
    api: {
      resolveRequire: (module: string) => string;
      insertRss: (RSSUrl: string) => Promise<RssRes>;
      articleRecommend: (
        data: number[],
        quantity: number,
      ) => Promise<RecommendList>;
    };
    dbApi: Modules;
  }
}
