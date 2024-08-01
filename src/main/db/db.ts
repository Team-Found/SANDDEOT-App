import * as sqlite3 from "sqlite3";
const path = require("path");

const db = new sqlite3.Database(
  path.resolve(__dirname, "../../SANDDOET.db"),
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log("Connected to the Database");
    }
  },
);

export default db;
