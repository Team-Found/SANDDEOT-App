import { ElectronAPI } from "@electron-toolkit/preload";
import { Modules } from "../main/utils/db/types/modules.d.ts";

declare global {
  interface Window {
    electron: ElectronAPI;
    api: unknown;
    dbApi: Modules;
  }
}
