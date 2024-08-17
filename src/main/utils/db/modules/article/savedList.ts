import db from "../../db";
import Article from "../../types/Article";

const savedArticleList = (): Promise<Article[]> => {
  const sql = `SELECT articleID, RSSID, title, date, body, saved FROM RSSArticle WHERE saved = 1`;
  return new Promise((resolve, reject) => {
    db.all(sql, (err, rows: Article[]) => {
      if (err) {
        console.error("SQL error:", err.message);
        reject();
      } else if (rows) {
        resolve(rows);
      } else {
        console.log(`No article found`);
        reject();
      }
    });
  });
};

// articleList().then((articles) => {
//   console.log(articles);
// });

export default savedArticleList;
