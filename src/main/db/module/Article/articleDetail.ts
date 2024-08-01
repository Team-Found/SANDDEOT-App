import ArticleDetail from "../../types/ArticleDetail";
import db from "../../db";
// db.serialize(() => {
const articleDetail = (bodyID: number): Promise<ArticleDetail> => {
  const sql = "SELECT * FROM Body WHERE bodyID = ?";
  return new Promise((resolve, reject) => {
    db.get(sql, [bodyID], (err, row: ArticleDetail) => {
      if (err) {
        console.error("SQL error:", err.message);
        reject();
      } else if (row) {
        // console.log("Article detail:", row);
        resolve(row);
      } else {
        console.log(`No article found with bodyID ${bodyID}`);
        reject();
      }
    });
  });
};
export default articleDetail;
