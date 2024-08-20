import db from "../../db";

const save = (articleID: number, saved: number): Promise<void> => {
  const sql = `UPDATE RSSArticle SET saved = ? WHERE articleID = ?`;
  return new Promise((resolve, reject) => {
    db.run(sql, [saved, articleID], (err) => {
      if (err) {
        console.error("SQL error:", err.message);
        reject();
      } else {
        console.log(`update success`);
        resolve();
      }
    });
  });
};
export default save;
