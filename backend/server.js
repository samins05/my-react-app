const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'crud'
})


app.get('/', (re,res)=>{
    return res.json("From Backend Side");
})

app.get('/login', (req,res)=>{
    const sql = "SELECT * FROM login"
    db.query(sql, (err,data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
})

/* app.post('/crud', (req,res) =>{
    const sql = "INSERT INTO login ('username', 'password',p) VALUES (?)"
})*/

app.listen(8081, ()=> {
    console.log("listening");
})