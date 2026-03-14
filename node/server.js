const db = require("./data.js");
const express = require("express");
const path = require("path");

const server = express();
const port = 3000;

server.use(express.json());

server.listen(port, () => {
    console.log("Server is listening on port " + port + "...");
});

//
server.use(express.static(path.join(__dirname, "..")));

//
server.post("/insert-task", (req, res) => {   //req = request object, res = response object
    const { todo, deadline, done } = req.body;
    if (todo == null) {
       return res.status(400).json({ error: "Missing fields" });
    }
    db.insert_task(todo, deadline, done);
    res.json({ message: "Inserted successfully" });
});

//
server.get("/get-task", (req, res) => {
    db.get_task((err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        console.log("Sending tasks:", rows);
        res.json(rows);
    });
})