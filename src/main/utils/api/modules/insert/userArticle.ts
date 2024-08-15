import db from "../../../db/db";

const addUserRSS = async (
  title: string,
  date: Date,
  body: string,
): Promise<void> => {
  const query = `
    INSERT INTO rssArticles (title, date, body)
    VALUES (?, ?, ?)
  `;
  const unixTime = Math.floor(date.getTime() / 1000);
  return new Promise((resolve, reject) => {
    db.run(query, [title, unixTime, body], (err) => {
      if (err) {
        console.error("SQL error3:", err.message);
        reject();
      } else {
        console.log(`글 생성 성공`);
        resolve();
      }
    });
  });
};

export default addUserRSS;
