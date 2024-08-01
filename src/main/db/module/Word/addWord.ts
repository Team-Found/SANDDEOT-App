import db from "../../db";

const addWord = (
  word: string,
  mean: string,
  bodyID: number,
): Promise<number> => {
  const sql = "INSERT INTO Word (word, mean, bodyID) VALUES (?, ?, ?)";
  return new Promise((resolve, reject) => {
    db.run(sql, [word, mean, bodyID], (err) => {
      if (err) {
        console.error("SQL error:", err.message);
        reject();
      } else {
        console.log(`success`);
        resolve(0);
      }
    });
  });
};

export default addWord;
