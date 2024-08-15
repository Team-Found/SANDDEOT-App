import db from "../../db";

const lastUpdate = (): Promise<Date> => {
  const sql = "SELECT MAX(date) as date FROM RSSArticle";
  return new Promise((resolve) => {
    db.get(sql, (err, row: { date: number }) => {
      if (err) {
        console.error("SQL error:", err.message);
        resolve(new Date(1970, 1, 1));
      }
      resolve(new Date(row.date));
    });
  });
};

export default lastUpdate;
