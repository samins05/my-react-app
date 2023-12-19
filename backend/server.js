const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())

const db = mysql.createConnection({ // create connection to local sql database 
    host: "localhost",
    user: 'root',
    password: '',
    database: 'crud'
})


app.get('/', (re,res)=>{  // r
    return res.json("backend");
})

app.get('/leaderboards', (req,res)=>{ // return information from the local database 'leaderboards'
    const sql = "SELECT * FROM leaderboards"
    db.query(sql, (err,data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
})


app.listen(8081, ()=> {
    console.log("listening");
})