import * as sqlite3 from "sqlite3";
const path = require("path");

const db = new sqlite3.Database(
  path.resolve(__dirname, "../../SANDDOET.db"),
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log("Connected to the Database");
    }
  },
);

// Type definition
// Article detail: {
//   bodyID: 1,
//   title: 'junho',
//   progress: 30,
//   date: 1722458179,
//   body: '<p>안녕하세요 저는 이재환입니다.</p>',
//   translated: '<p>안녕하세요 저는 이준호입니다.</p>',
//   origin: 1,
//   image: null,
//   feedback: null,
//   score: null,
//   editDate: null,
//   IMPP: null,
//   categoryID: 1
// }
type ArticleDetail = {
  bodyID: number;
  title: string;
  body: string;
  progress: number;
  date: number;
  translated: string;
  origin: number;
  image: string | null;
  feedback: string | null;
  score: number | null;
  editDate: number | null;
  IMPP: number | null;
  categoryID: number;
};
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

// Example call
articleDetail(1).then((article) => {
  console.log(article);
});
// });
