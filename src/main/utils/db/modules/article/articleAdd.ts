import db from "../../db";

const insertRSSA = async (bodyID: number, RSSID: number): Promise<number> => {
  return new Promise((resolve, reject) => {
    db.run(
      "INSERT INTO RSSArticle (bodyID, RSSID) VALUES (?, ?)",
      [bodyID, RSSID],
      (err) => {
        if (err) {
          console.error("SQL error3:", err.message);
          reject(err);
        } else {
          console.log(`third success`);
          resolve(0);
        }
      },
    );
  });
};

const selectBodyID = async (
  title: string,
  unixTime: number,
  body: string,
  translated: string,
  origin: number,
  author: string,
): Promise<number> => {
  return new Promise((resolve, reject) => {
    db.get(
      "SELECT bodyID FROM Body WHERE title = ? and date = ? and body = ? and translated = ? and origin = ? and author = ?",
      [title, unixTime, body, translated, origin, author],
      (err, row: { bodyID: number }) => {
        if (err) {
          console.error("SQL error2:", err.message);
          reject(err);
        } else {
          console.log(`second success`);
          resolve(row.bodyID);
        }
      },
    );
  });
};

const add = async (
  title: string,
  date: Date,
  body: string,
  translated: string,
  origin: number,
  author: string,
  RSSID?: number,
): Promise<number> => {
  const sql =
    "INSERT INTO Body (title, date, body, translated, origin, author) VALUES (?, ?, ?, ?, ?, ?)";
  const unixTime = Math.floor(date.getTime() / 1000);

  return new Promise((resolve, reject) => {
    db.run(sql, [title, unixTime, body, translated, origin, author], async (err) => {
      if (err) {
        console.error("SQL error1:", err.message);
        reject(err);
      } else {
        if (RSSID) {
          try {
            console.log(`success`);
            const bodyID = await selectBodyID(title, unixTime, body, translated, origin, author);
            await insertRSSA(bodyID, RSSID);
            resolve(0);
          } catch (e) {
            reject(e);
          }
        } else {
          resolve(0);
        }
      }
    });
  });
};

export default add;
