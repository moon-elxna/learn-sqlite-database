const sqlite3 = require("sqlite3").verbose();

//connect to db
const db = new sqlite3.Database("./data.db");
//create table
sql = `CREATE TABLE IF NOT EXISTS task(id INTEGER PRIMARY KEY, todo, deadline, done)`;

function insert_item(todo, deadline, done){
    
    db.run(`INSERT INTO task(todo, deadline, done) VALUES(?,?,?)`, [todo, deadline, done], (err)=>{
        console.log(err.message);
    });
}

export {insert_item};