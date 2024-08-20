import db from "../../db";
// db.serialize(() => {
const selectRSS = (RSSURL: string): Promise<number> => {
  const sql = "SELECT RSSID FROM RSS WHERE RSSURL = ?";
  return new Promise((resolve, reject) => {
    db.get(sql, [RSSURL], (err, row: number) => {
      if (err) {
        console.error("SQL error:", err.message);
        reject();
      } else if (row) {
        // console.log("Article detail:", row);
        resolve(row);
      } else {
        console.log(`No article found with RSSID.`);
        reject();
      }
    });
  });
};
export default selectRSS;
