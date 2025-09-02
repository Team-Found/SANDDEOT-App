import * as sqlite3 from "sqlite3";
import path from "path";

// 개발 환경일 때의 경로
const devDbPath = path.join(process.cwd(), "resources", "SANDDOET.db");

function getDbPath(): string {
  return process.env.NODE_ENV === "development"
    ? devDbPath
    : path.join(process.resourcesPath, "SANDDOET.db");
}

// IIFE를 사용하여 동기적으로 DB 초기화
const db = (() => {
  const dbPath = getDbPath();
  console.log("Using DB path:", dbPath);

  const database = new sqlite3.Database(
    dbPath,
    sqlite3.OPEN_READWRITE,
    (err) => {
      if (err) {
        console.error("DB connection error:", err.message);
      } else {
        console.log("Connected to the Database");
      }
    },
  );

  return database;
})();

export default db;
