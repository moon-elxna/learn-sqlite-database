const sqlite3 = require("sqlite3").verbose();

//connect to db
const db = new sqlite3.Database("./data.db");
//create table
db.run(`CREATE TABLE IF NOT EXISTS task(id INTEGER PRIMARY KEY, todo, deadline, done)`);

function insert_task(todo, deadline, done){
    db.run(`INSERT INTO task(todo, deadline, done) VALUES(?,?,?)`, [todo, deadline, done]);
}

function get_task(callback){
    db.all(`SELECT * FROM task`, [], (err, rows) => {
        callback(err, rows);
    });
};

module.exports = {insert_task, get_task};