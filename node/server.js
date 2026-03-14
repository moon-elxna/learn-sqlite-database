const db = require("./data.js");
const express = require("express");

const server = express();
const port = 3000;
server.use(express.json());
server.listen(port, () => {console.log("Server is listening on port " + String(port) + "...")});

server.post("/insert-task", (req, res) => {
    if(todo == null){
        return res.status(400).json({ error: "Missing fields" });
    }
    db.insert_item(todo, deadline, done);
    res.json({ message: "Inserted successfully" });
})
