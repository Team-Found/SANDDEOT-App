import db from "../../db";
import { RSS } from "../../types/Rss";

const list = (): Promise<RSS[]> => {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM RSS WHERE state = 0", (err, rows: RSS[]) => {
      if (err) {
        console.error("SQL error:", err.message);
        reject();
      } else {
        resolve(rows.slice(1));
      }
    });
  });
};

export default list;

// test code

// rssList().then((rows) => {
//   console.log(rows);
// });
