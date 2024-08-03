import { ElectronAPI } from "@electron-toolkit/preload";
import { Modules } from "../main/db/types/modules";

declare global {
  interface Window {
    electron: ElectronAPI;
    api: unknown;
    dbApi: Modules;
  }
}
