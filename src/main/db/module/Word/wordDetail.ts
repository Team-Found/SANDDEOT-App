import WordDetail from "../../types/WordDetail";
import db from "../../db";

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

export default wordDetail;
