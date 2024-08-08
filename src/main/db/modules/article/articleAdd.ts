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
  image?: Buffer | null,
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
export default add;
