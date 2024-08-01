import { Learn, LearnAnalytics } from "../../types/Learn";
import db from "../../db";
import LearnEdit from "./learnEdit";

function dateToEpoch(thedate): Date {
  return thedate.setHours(0, 0, 0, 0);
}

const learnAnalytics = async (
  anStartDate: Date = new Date(0),
  anEndDate: Date = new Date(),
): Promise<LearnAnalytics[]> => {
  const sql = "SELECT * FROM Learn WHERE startDate between ? and ?";

  return new Promise((resolve, reject) => {
    const result = [] as LearnAnalytics[];
    db.all(
      sql,
      [
        Math.floor(anStartDate.getTime()) / 1000,
        Math.floor(anEndDate.getTime()) / 1000,
      ],
      (err, rows: Learn[]) => {
        if (err) {
          console.error("SQL error:", err.message);
          reject();
        } else if (rows) {
          // console.log(rows);
          const promises = rows.map(async (row) => {
            const learnDate = new Date(row.startDate * 1000);
            let status = false;
            const pormises2 = result.map(async (learn) => {
              if (learn.date === dateToEpoch(learnDate)) {
                learn.learnID.push(row.learnID);
                learn.duration += row.endDate - row.startDate;
                status = true;
                const edit = await LearnEdit(row.learnID);
                learn.edit.push(...edit);
              }
            });
            await Promise.all(pormises2);
            if (!status) {
              const edit = await LearnEdit(row.learnID);
              result.push({
                date: dateToEpoch(learnDate),
                learnID: [row.learnID],
                duration: row.endDate - row.startDate,
                edit: edit,
              });
            }
            return row;
          });
          Promise.all(promises).then(() => {
            resolve(result);
          });
        } else {
          console.log(`No word found with ??}`);
          reject();
        }
      },
    );
  });
};

export default learnAnalytics;
