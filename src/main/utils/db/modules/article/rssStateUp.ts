import db from "../../db";

const rssStateUp = (RSSURL: string): Promise<void> => {
  const sql = `UPDATE RSS SET state = 0 WHERE RSSURL = ?`;
  return new Promise((resolve, reject) => {
    db.run(sql, [RSSURL], (err) => {
      if (err) {
        console.error("SQL error:", err.message);
        reject();
      } else {
        resolve();
      }
    });
  });
};

export default rssStateUp;
