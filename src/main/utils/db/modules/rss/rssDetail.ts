import db from "../../db";

const detail = async (
  RSSID: number,
): { RSSID: number; RSSURL: string; RSSName: string; RSSImage: string } => {
  const sql = `
    SELECT *
    FROM RSS
    WHERE RSSID = ?
  `;
  return new Promise((resolve, reject) => {
    db.all(sql, [RSSID], (err, rows) => {
      if (err) {
        console.error("SQL error13:", err.message);
        reject();
      } else {
        resolve(rows);
      }
    });
  });
};

export default detail;
