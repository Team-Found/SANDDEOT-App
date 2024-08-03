import { contextBridge } from "electron";
import { electronAPI } from "@electron-toolkit/preload";
import db from "../main/utils/db/index.ts";
// import path from "path";

// const path = require("node:path");

// const db = require(path.join(process.cwd(), "src/main/db/index.ts"));

console.log(db);

// Custom APIs for renderer
const api = {
  // db: db,
};

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld("electron", electronAPI);
    contextBridge.exposeInMainWorld("api", api);
    contextBridge.exposeInMainWorld("dbApi", db);
  } catch (error) {
    console.error(error);
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI;
  // @ts-ignore (define in dts)
  window.api = api;
}
