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

interface LearnAnalytics {
  date: Date; // 학습 날짜
  learnID: number[]; // 학습한 학습 ID
  duration: number; // 해당 일의 총 학습 시간
  edit: LeanEdit[]; // 해당 일의 수정사항 리스트
}

interface LeanEdit {
  editID: number; // 수정 ID
  learnID: number; // 학습 ID
  bodyID: number; // 수정한 본문 ID
  editLineNum: number; // 수정한 라인 번호
  original: string; // 수정 전 내용
  translated: string; // 수정 후 내용
}

interface Learn {
  learnID: number; // 학습 ID
  startDate: number; // 학습 시작 시간 unix timestamp
  endDate: number; // 학습 종료 시간 unix timestamp
  bodyID: number; // 학습한 본문 ID
}

function dateToEpoch(thedate): Date {
  return thedate.setHours(0, 0, 0, 0);
}

const LearnEdit = (learnID?: number): Promise<LeanEdit[]> => {
  const sql = `SELECT * FROM LearnEdit ${learnID ? `WHERE learnID = ?` : ""}`;
  return new Promise((resolve, reject) => {
    db.all(sql, [learnID], (err, rows: LeanEdit[]) => {
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

const LearnAnalytics = async (
  anStartDate: Date = new Date(0),
  anEndDate: Date = new Date(),
): Promise<LearnAnalytics[]> => {
  const sql = "SELECT * FROM Learn WHERE startDate between ? and ?";

  return new Promise((resolve, reject) => {
    const result = [] as LearnAnalytics[];
    db.all(
      sql,
      [
        Math.floor(anStartDate.getTime()) / 1000,
        Math.floor(anEndDate.getTime()) / 1000,
      ],
      (err, rows: Learn[]) => {
        if (err) {
          console.error("SQL error:", err.message);
          reject();
        } else if (rows) {
          // console.log(rows);
          const promises = rows.map(async (row) => {
            const learnDate = new Date(row.startDate * 1000);
            let status = false;
            const pormises2 = result.map(async (learn) => {
              if (learn.date === dateToEpoch(learnDate)) {
                learn.learnID.push(row.learnID);
                learn.duration += row.endDate - row.startDate;
                status = true;
                const edit = await LearnEdit(row.learnID);
                learn.edit.push(...edit);
              }
            });
            await Promise.all(pormises2);
            if (!status) {
              const edit = await LearnEdit(row.learnID);
              result.push({
                date: dateToEpoch(learnDate),
                learnID: [row.learnID],
                duration: row.endDate - row.startDate,
                edit: edit,
              });
            }
            return row;
          });
          Promise.all(promises).then(() => {
            resolve(result);
          });
        } else {
          console.log(`No word found with ??}`);
          reject();
        }
      },
    );
  });
};

// LearnAnalytics().then((learn) => {
//   console.log(learn);
// });

// categoryList().then((category) => {
//   console.log(category);
// });

// articleList().then((list) => {
//   console.log(list);
// });

// wordDetail(false).then((word) => {
//   console.log(word);
// });
// articleDetail(1).then((article) => {
//   console.log(article);
// });
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

// newText("JJJJunho", new Date(), "junho is mmotsanggim", "", 3, 1).then((a) => {
//   console.log(a);
// });

const updateText = (
  bodyID: number,
  option: {
    title?: string;
    body?: string;
    image?: Blob;
    translated?: string;
    feedback?: string;
    score?: number;
    editDate?: Date;
    IMPP?: string;
    level?: number;
  },
): Promise<number> => {
  const sql = `UPDATE Body SET ${Object.keys(option).map((key) =>
    key ? `${key} = ?` : "",
  )} WHERE bodyID = ?`;

  // const sql = `UPDATE Body SET bodyID = ?, title = `;
  return new Promise((resolve, reject) => {
    db.run(
      sql,
      [
        ...Object.values(option).filter(
          (item) => item !== undefined && item !== null,
        ),
        bodyID,
      ],
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

// updateText(1, { title: "jaehwan" }).then((a) => {
//   console.log(a);
// });

const addWord = (
  word: string,
  mean: string,
  bodyID: number,
): Promise<number> => {
  const sql = "INSERT INTO Word (word, mean, bodyID) VALUES (?, ?, ?)";
  return new Promise((resolve, reject) => {
    db.run(sql, [word, mean, bodyID], (err) => {
      if (err) {
        console.error("SQL error:", err.message);
        reject();
      } else {
        console.log(`success`);
        resolve(0);
      }
    });
  });
};

// addWord("jelly", "젤리", 1).then((a) => {
//   console.log(a);
// });
