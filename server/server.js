const express = require("express");
const server = express();
server.listen(3000, () => {console.log("Server is listening on port 3000...")});
server.get("/", (req, res) => {res.send("Hello World!")})
