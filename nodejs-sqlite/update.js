import sqlite3 from "sqlite3";
import { execute } from "./sql.js";

const main = async () => {
  const db = new sqlite3.Database("my.db");
  const sql = `UPDATE products SET price = ? WHERE id = ?`;
  try {
    await execute(db, sql, [1000.99, 1]);
  } catch (err) {
    console.log(err);
  } finally {
    db.close();
  }
};

main();