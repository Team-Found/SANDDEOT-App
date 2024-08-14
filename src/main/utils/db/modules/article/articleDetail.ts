import ArticleDetail from "../../types/ArticleDetail";
import db from "../../db";
// db.serialize(() => {
const detail = (ArticleID: number): Promise<ArticleDetail> => {
  const sql = "SELECT * FROM RSSArticle WHERE ArticleID = ?";
  return new Promise((resolve, reject) => {
    db.get(sql, [ArticleID], (err, row: ArticleDetail) => {
      if (err) {
        console.error("SQL error:", err.message);
        reject();
      } else if (row) {
        // console.log("Article detail:", row);
        resolve(row);
      } else {
        console.log(`No article found with ArticleID ${ArticleID}`);
        reject();
      }
    });
  });
};
export default detail;
