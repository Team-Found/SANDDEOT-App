import {
  app,
  shell,
  BrowserWindow,
  ipcMain,
  // session,
  Menu,
  Tray,
} from "electron";
import { join } from "path";
import { electronApp, optimizer, is } from "@electron-toolkit/utils";
import icon from "../../resources/icon.png?asset";
import trayIcon from "../../resources/trayIcon.png?asset";
import path from "path";

// process.env.ELECTRON_RENDERER_URL

function createWindow(): void {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 750,
    show: true,
    // autoHideMenuBar: true,
    // vibrancy: "sidebar", // on MacOS
    backgroundColor: "#00000000",
    titleBarStyle: "hiddenInset",
    titleBarOverlay: true,
    ...(process.platform === "linux" ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, "../preload/index.js"),
      sandbox: false,
    },
  });

  // mainWindow.setVibrancy("sidebar");

  mainWindow.on("ready-to-show", () => {
    mainWindow.show();
  });

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url);
    return { action: "deny" };
  });

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (!(is.dev && process.env["ELECTRON_RENDERER_URL"])) {
    process.env["ELECTRON_RENDERER_URL"] = join(__dirname, "../renderer");
    // mainWindow.loadFile(join(__dirname, "../renderer/index.html"));
  }
  mainWindow.loadURL(
    is.dev
    ? process.env["ELECTRON_RENDERER_URL"] :
    "file://" + process.env["ELECTRON_RENDERER_URL"] + "/index.html",
  );
  console.log("file://" + process.env["ELECTRON_RENDERER_URL"] + "/index.html");
  // if (is.dev && process.env["ELECTRON_RENDERER_URL"]) {
  //   mainWindow.webContents.openDevTools();
  // }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  const tray = new Tray(trayIcon);
  const contextMenu = Menu.buildFromTemplate([
    {
      label: "산뜻 앱 보이기",
      click: (): void => createWindow(),
      type: "normal",
    },
    { type: "separator" },
    { label: "종료", click: (): void => app.quit(), type: "normal" },
  ]);
  tray.setToolTip("산뜻");
  tray.setContextMenu(contextMenu);

  // Set app user model id for windows
  electronApp.setAppUserModelId("com.electron");

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on("browser-window-created", (_, window) => {
    optimizer.watchWindowShortcuts(window);
  });

  // session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
  //   callback({
  //     responseHeaders: {
  //       ...details.responseHeaders,
  //       "Content-Security-Policy": [
  //         "default-src 'self' 'unsafe-inline' 'unsafe-eval' data: https:; img-src 'unsafe' data: https:;",
  //       ],
  //     },
  //   });
  // });

  // IPC test
  ipcMain.on("ping", () => console.log("pong"));

  ipcMain.handle("get-db-path", () => {
    return path.join(app.getPath("userData"), "SANDDOET.db");
  });

  // ipcMain.on(constants.SEND_MAIN_PING, (event, arg) => {
  //   console.log("Main.js received a ping!!!");
  // });

  createWindow();

  app.on("activate", function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
// app.on("window-all-closed", () => {
//   if (process.platform !== "darwin") {
//     app.quit();
//   }
// });

app.on("window-all-closed", app.dock.hide);

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.

// background process

import { getRssFeedsItemsAfterDatetime } from "./utils/rss/rss";
import lastUpdate from "./utils/db/modules/rss/lastUpdate";
import db from "./utils/db/index";

import newArticle from "./utils/api/modules/article/newArticle";

const dbApi = db;

const updateRSSArticleDB = async (): Promise<void> => {
  const lastUpdateDate = await lastUpdate();
  // console.log(lastUpdateDate, "lastUpdateDate");
  const RSSs = await dbApi.rss.list();
  // console.log(RSSs, "RSSs");
  const items = await getRssFeedsItemsAfterDatetime(RSSs, lastUpdateDate);

  if (items.length === 0) {
    console.log("already up to date");
    return;
  }
  // console.log(items);

  newArticle(
    items.map(
      (item) =>
        ({
          rssID: item.RSSID,
          title: item.title,
          description: item.content || item.description,
          summary: item.summary,
          date: Math.floor(new Date(item.isoDate).getTime() / 1000),
          content: [{ value: item["content:encoded"] }],
          link: item.link,
          media_thumbnail: item["media:thumbnail"],
        }) as rawArticle,
    ),
  );
};

const background = setInterval(() => {
  updateRSSArticleDB();
}, 1000 * 10); // 10 sec

app.on("before-quit", () => {
  clearInterval(background);
});
