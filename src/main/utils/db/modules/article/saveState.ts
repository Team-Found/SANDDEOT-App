import db from "../../db";
// db.serialize(() => {
const saveState = (articleID: number): Promise<number> => {
  const sql = "SELECT saved FROM RSSArticle WHERE articleID = ?";
  return new Promise((resolve, reject) => {
    db.get(sql, [articleID], (err, row: number) => {
      if (err) {
        console.error("SQL error:", err.message);
        reject();
      } else if (row) {
        // console.log("Article detail:", row);
        resolve(row);
      } else {
        console.log(`No article found with ArticleID ${articleID}`);
        reject();
      }
    });
  });
};
export default saveState;
