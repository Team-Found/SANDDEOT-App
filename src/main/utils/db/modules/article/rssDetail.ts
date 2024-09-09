import db from "../../db";
import { RSS } from "../../types/Rss";

const RSSDetail = async (RSSID: number): Promise<RSS> => {
  const sql = `
    SELECT *
    FROM RSS
    WHERE RSSID = ?
  `;
  return new Promise((resolve, reject) => {
    db.all(sql, [RSSID], (err, row: RSS) => {
      if (err) {
        console.error("SQL error5:", err.message);
        reject();
      } else {
        resolve(row);
      }
    });
  });
};

export default RSSDetail;
