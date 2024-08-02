import db from "../../db";
import Article from "../../types/Article";

const articleList = (
  startLevel: number = 1,
  endLevel: number = 6,
  categoryID?: number,
): Promise<Article[]> => {
  const sql = `SELECT title, author, level, progress, image FROM Body WHERE level between ? and ? ${categoryID ? `and categoryID = ?` : ``}`;
  return new Promise((resolve, reject) => {
    db.all(sql, [startLevel, endLevel, categoryID], (err, rows: Article[]) => {
      if (err) {
        console.error("SQL error:", err.message);
        reject();
      } else if (rows) {
        resolve(rows);
      } else {
        console.log(
          `No article found with ${[startLevel, endLevel, categoryID]}`,
        );
        reject();
      }
    });
  });
};

// articleList().then((articles) => {
//   console.log(articles);
// });

export default articleList;
