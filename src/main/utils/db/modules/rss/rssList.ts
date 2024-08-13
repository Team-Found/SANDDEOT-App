import db from "../../db";
import { RSS } from "../../types/Rss";

export default function rssList(): Promise<RSS[]> {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM RSS", (err, rows: RSS[]) => {
      if (err) {
        console.error("SQL error:", err.message);
        reject();
      } else {
        resolve(rows);
      }
    });
  });
}

// test code

// rssList().then((rows) => {
//   console.log(rows);
// });
