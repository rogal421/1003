const express = require('express')
const cors = require('cors')
var mysql = require('mysql')

const app = express()

app.use(cors())

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "glosowania"
})
con.connect(function(err){
    if(err) console.log(err)
    console.log("Połączono")
})

app.get("/select", function(req, res){
    const sql = "SELECT * FROM glosowanie"
    con.query(sql, function(err, result, fields){
        if(err) console.log(err)
        res.send(result)
    })
})

app.get("/glosuj/:PESEL/:nr_kandydata", function(req, res){
    const PESEL = req.params.PESEL
    const nr_kandydata = req.params.nr_kandydata
    const sql = `INSERT INTO glosowanie (PESEL, nr_kandydata) VALUES ('${PESEL}', '${nr_kandydata}')`
    con.query(sql, function(err, result, fields){
        if(err){
            console.log(err)
            res.send("nie zagłosowano")
        } else{
            res.send("zagłosowano")
        }
    })
})

app.listen(3000)