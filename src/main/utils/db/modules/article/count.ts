import db from "../../db";

interface count {
  RSSID: number;
}

const count = (): Promise<count[]> => {
  const sql =
    "SELECT RSS.RSSID FROM RSSArticle, RSS WHERE RSS.RSSID = RSSArticle.RSSID AND state = 0 GROUP BY RSS.RSSID";
  return new Promise((resolve, reject) => {
    db.all(sql, (err, rows: count[]) => {
      if (err) {
        console.error("SQL error c: ", err.message);
        reject();
      } else if (rows) {
        // console.log("Article detail:", rows);
        resolve(rows);
      } else {
        console.log(`카운트 실패`);
        reject();
      }
    });
  });
};
export default count;
