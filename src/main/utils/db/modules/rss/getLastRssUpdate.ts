import db from "../../db";

const getLastRssUpdate = (): Promise<Date> => {
  const sql = "SELECT MAX(date) as date FROM Body";
  return new Promise((resolve, reject) => {
    db.get(sql, (err, row: { date: number }) => {
      if (err) {
        console.error("SQL error:", err.message);
        resolve(new Date(1970, 1, 1));
      }
      resolve(new Date(row.date));
    });
  });
};

export default getLastRssUpdate;
