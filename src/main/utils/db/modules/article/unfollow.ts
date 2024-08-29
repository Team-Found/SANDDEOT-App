import db from "../../db";

const RSSArticleDel = (RSSID: number): Promise<void> => {
  const sql = `DELETE FROM RSSArticle WHERE RSSID = ? AND saved = 0`;
  return new Promise((resolve, reject) => {
    db.run(sql, [RSSID], (err) => {
      if (err) {
        console.error("SQL error9:", err.message);
        reject();
      } else {
        console.log("Article Del Succese");
        RSSDel2(RSSID).then(() => {
          resolve();
        });
      }
    });
  });
};

const RSSDel2 = (RSSID: number): Promise<void> => {
  const sql = `UPDATE RSS SET state = 1 WHERE RSSID = ?`;
  return new Promise((resolve, reject) => {
    db.run(sql, [RSSID], (err) => {
      if (err) {
        console.error("SQL error10:", err.message);
        reject();
      } else {
        resolve();
      }
    });
  });
};

export default RSSArticleDel;
