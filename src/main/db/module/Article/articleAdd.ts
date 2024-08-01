import db from "../../db";

const articleAdd = (
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
export default articleAdd;