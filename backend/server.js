/* creating the mysql server to store
email, password, and progress of user in each game(to be added later)
*/
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

const database = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:
})

app.use(cors());

app.listen(8081, () => {
    console.log("Listening...");
})