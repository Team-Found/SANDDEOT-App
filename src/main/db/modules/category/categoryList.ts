import Category from "../../types/Category";
import db from "../../db";
const list = (): Promise<Category[]> => {
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
export default list;
