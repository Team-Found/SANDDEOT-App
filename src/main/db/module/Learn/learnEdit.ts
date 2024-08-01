import db from "../../db";
import { LeanEdit } from "../../types/Learn";

const learnEdit = (learnID?: number): Promise<LeanEdit[]> => {
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

export default learnEdit;
