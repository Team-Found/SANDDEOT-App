import db from "../../db";
import { LearnAddEdit } from "../../types/Learn";

const learnAdd = (
  startDate: Date,
  endDate: Date,
  bodyID: number,
  editList: LearnAddEdit[],
): Promise<number> => {
  const sql = "INSERT INTO Learn (startDate, endDate, bodyID) VALUES (?, ?, ?)";
  return new Promise((resolve, reject) => {
    db.run(
      sql,
      [
        Math.floor(startDate.getTime() / 1000),
        Math.floor(endDate.getTime() / 1000),
        bodyID,
      ],
      (err) => {
        if (err) {
          console.error("SQL error:", err.message);
          reject();
        } else {
          console.log(`frist success`);
          db.get(
            "Select learnID from Learn Where startDate = ? and endDate = ? and bodyID = ?",
            [
              Math.floor(startDate.getTime() / 1000),
              Math.floor(endDate.getTime() / 1000),
              bodyID,
            ],
            (err, row: { learnID: number }) => {
              if (err) {
                console.error("SQL error:", err.message);
                reject();
              } else {
                console.log(`second success`);
                const learnID = row.learnID;
                const sql =
                  "INSERT INTO LearnEdit (learnID, editLineNum, original, translated, bodyID) VALUES (?, ?, ?, ?, ?)";
                const promises = editList.map((edit) => {
                  return new Promise<void>((resolve, reject) => {
                    db.run(
                      sql,
                      [
                        learnID,
                        edit.lineNum,
                        edit.original,
                        edit.newTranslated,
                        bodyID,
                      ],
                      (err) => {
                        if (err) {
                          console.error("SQL error:", err.message);
                          reject();
                        } else {
                          console.log(`third success`);
                          resolve();
                        }
                      },
                    );
                  });
                });
                Promise.all(promises).then(() => {
                  console.log(`fourth success`);
                  resolve(learnID);
                });
              }
            },
          );
        }
      },
    );
  });
};

// learnAdd(new Date(), new Date(), 1, [
//   { lineNum: 1, original: "이준호", newTranslated: "이재환" },
//   { lineNum: 2, original: "이ㅈ호", newTranslated: "이ㅈ환" },
//   { lineNum: 3, original: "이준ㅎ", newTranslated: "이재ㅎ" },
// ]);

export default learnAdd;
