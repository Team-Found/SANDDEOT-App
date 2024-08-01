import db from "../../db";

const articleUpdate = (
  bodyID: number,
  option: {
    title?: string;
    body?: string;
    image?: Blob;
    translated?: string;
    feedback?: string;
    score?: number;
    editDate?: Date;
    IMPP?: string;
    level?: number;
  },
): Promise<number> => {
  const sql = `UPDATE Body SET ${Object.keys(option).map((key) =>
    key ? `${key} = ?` : "",
  )} WHERE bodyID = ?`;

  // const sql = `UPDATE Body SET bodyID = ?, title = `;
  return new Promise((resolve, reject) => {
    db.run(
      sql,
      [
        ...Object.values(option).filter(
          (item) => item !== undefined && item !== null,
        ),
        bodyID,
      ],
      (err) => {
        if (err) {
          console.error("SQL error:", err.message);
          reject();
        } else {
          console.log(`success`);
          resolve(0);
        }
      },
    );
  });
};
export default articleUpdate;
