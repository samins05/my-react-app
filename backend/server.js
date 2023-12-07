/* creating the mysql server to store
email, password, and progress of user in each game(to be added later)


video to set up express and node.js: https://www.youtube.com/watch?v=w3vs4a03y3I&ab_channel=ArpanNeupane

*/
const express = require('express'); // import express module
const app = express(); // import express module

const mysql = require('mysql');
const cors = require('cors');

app.use(cors());

const database = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud"
})

app.post('/login', (req,res) =>{
const sql = "SELECT * FROM username WHERE username =? AND password =?";
const values = [
    req.body.email,
    req.body.password
]
database.query(sql, [values], (err, data) =>{
    if(err) return res.json("Login Failed");
    return res.json(data);   
})
})


app.listen(8081, () => {
    console.log("Listening...");
})