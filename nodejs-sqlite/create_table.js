//import sqlite modules
import sqlite3 from "sqlite3";
//import execute function
import { execute } from "./sql.js";

const main = async () => {
    //create a new database or open a already exiting one (.. , sqlite3.OPEN_READWRITE) .. for read write only access)
    const db = new sqlite3.Database("my.db");
    try {
        //create table
        await execute(
            db, 
            `CREATE TABLE IF NOT EXISTS products (
                id INTEGER PRIMARY KEY,
                name TEXT NOT NULL,
                price DECIMAL(10, 2) NOT NULL)`
        );
    }
    catch(error){
        console.log(error);
    }
    finally{
        //close database connection
        db.close();
    }
};

main();