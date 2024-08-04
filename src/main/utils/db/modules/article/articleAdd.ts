import db from "../../db";

// const db = require("../../db");

const add = (
  title: string,
  date: Date,
  body: string,
  translated: string,
  origin: number,
  categoryID: number,
  author: string,
  image?: Blob | null,
  RSSID?: number,
): Promise<number> => {
  const sql =
    "INSERT INTO Body (title, date, body, translated, origin, image, categoryID, author) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  // console.log(body);
  // console.log(title);
  // console.log(date);
  const unixTime = Math.floor(date.getTime() / 1000);
  return new Promise((resolve, reject) => {
    db.run(
      sql,
      [title, unixTime, body, translated, origin, image, categoryID, author],
      (err) => {
        if (err) {
          console.error("SQL error1:", err.message);
          reject();
        } else if (RSSID) {
          console.log(`success`);
          db.get(
            "SELECT bodyID FROM Body WHERE title = ? and date = ? and body = ? and translated = ? and origin = ? and categoryID = ? and author = ?",
            [title, unixTime, body, translated, origin, categoryID, author],
            (err, row: { bodyID: number }) => {
              if (err) {
                console.error("SQL error2:", err.message);
                reject();
              } else {
                console.log(`second success`);
                db.run(
                  "INSERT INTO RSSArticle (bodyID, RSSID) VALUES (?, ?)",
                  [row.bodyID, RSSID],
                  (err, row) => {
                    if (err) {
                      console.error("SQL error3:", err.message);
                      reject();
                    } else {
                      console.log(`third success`);
                      resolve(0);
                    }
                  },
                );
              }
            },
          );
        } else {
          resolve(0);
        }
      },
    );
  });
};

add("sd;lkf", new Date(), "hihihi", "", 3, 1, "dlwoghks", null, 1);

export default add;
