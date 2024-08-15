import db from "../../db";

const urlToId = (url: string): Promise<number> => {
  const sql = `SELECT RSSID FROM RSS WHERE RSSURL = ?`;
  return new Promise((resolve, reject) => {
    db.get(sql, [url], (err, row: { RSSID: number }) => {
      if (err) {
        console.error("SQL error:", err.message);
        reject();
      } else {
        resolve(row.RSSID);
      }
    });
  });
};

export default urlToId;
