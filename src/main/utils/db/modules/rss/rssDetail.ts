import db from "../../db";
import { RSS } from "../../types/Rss";

const detail = async (RSSID: number): Promise<RSS> => {
  const sql = `
    SELECT *
    FROM RSS
    WHERE RSSID = ?
  `;
  return new Promise((resolve, reject) => {
    db.get(sql, [RSSID], (err, row: RSS) => {
      if (err) {
        console.error("SQL error13:", err.message);
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
};

export default detail;
