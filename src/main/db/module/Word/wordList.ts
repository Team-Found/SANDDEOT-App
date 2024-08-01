import WordDetail from "../../types/WordDetail";
import db from "../../db";

const wordList = (star?: boolean): Promise<WordDetail[]> => {
  const sql =
    "SELECT * FROM Word" +
    (star === false
      ? " WHERE star = 0"
      : star === true
        ? " WHERE star = 1"
        : "");

  return new Promise((resolve, reject) => {
    db.all(sql, [], (err, rows: WordDetail[]) => {
      if (err) {
        console.error("SQL error:", err.message);
        reject();
      } else if (rows) {
        resolve(rows);
      } else {
        console.log(`No word found with ${star}`);
        reject();
      }
    });
  });
};

export default wordList;
