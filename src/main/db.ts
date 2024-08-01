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

type Article = {
  title: string;
  author: string;
  level: number;
  progress: number;
  image: Blob;
};

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
    // db.each(
    //   sql,
    //   [startLevel, endLevel, categoryID],
    //   (err, row: ArticleList) => {
    //     if (err) {
    //       console.error("SQL error:", err.message);
    //       reject();
    //     } else if (row) {
    //       result.push(row);
    //     } else {
    //       console.log(
    //         `No article found with bodyID ${[startLevel, endLevel, categoryID]}`,
    //       );
    //       reject();
    //     }
    //   },
    //   (err, n) => {
    //     if (err) {
    //       console.error("SQL error:", err.message);
    //       reject();
    //     } else {
    //       console.log(`Returned ${n} rows`);
    //       resolve(result);
    //     }
    //   },
    // );
  });
};

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
  level: number;
  author: string;
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

type WordDetail = {
  wordID: number;
  word: string;
  mean: string;
  expos: number;
  star: number;
  level: number;
  bodyID: number;
};

const wordDetail = (star?: boolean): Promise<WordDetail> => {
  const sql =
    "SELECT * FROM Word" +
    (star === false
      ? " WHERE star = 0"
      : star === true
        ? " WHERE star = 1"
        : "");

  return new Promise((resolve, reject) => {
    db.get(sql, [], (err, row: WordDetail) => {
      if (err) {
        console.error("SQL error:", err.message);
        reject();
      } else if (row) {
        resolve(row);
      } else {
        console.log(`No word found with ${star}`);
        reject();
      }
    });
  });
};

type Category = {
  categoryID: number;
  categoryName: string;
};

const categoryList = (): Promise<Category[]> => {
  const sql = "SELECT * FROM Category";

  return new Promise((resolve, reject) => {
    db.all(sql, [], (err, rows: Category[]) => {
      if (err) {
        console.error("SQL error:", err.message);
        reject();
      } else if (rows) {
        resolve(rows);
      } else {
        console.log(`No word found with ??}`);
        reject();
      }
    });
  });
};

const newText = (
  title: string,
  date: Date,
  body: string,
  translated: string,
  origin: number,
  categoryID: number,
  image?: Blob,
): Promise<number> => {
  const sql =
    "INSERT INTO Body (title, date, body, translated, origin, image, categoryID) VALUES (?, ?, ?, ?, ?, ?, ?)";
  const unixTime = Math.floor(date.getTime()) / 1000;
  return new Promise((resolve, reject) => {
    db.run(
      sql,
      [title, unixTime, body, translated, origin, image, categoryID],
      (err) => {
        if (err) {
          console.error("SQL error:", err.message);
          reject();
        } else {
          console.log(`success`);
          resolve(0);
        }
      },
    );
  });
};

newText("JJJJunho", new Date(), "junho is mmotsanggim", "", 3, 1).then((a) => {
  console.log(a);
});
