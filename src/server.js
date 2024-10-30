require('dotenv').config()
const express = require('express') //commenjs
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const mysql = require('mysql2');
const app = express()//app express
const port = process.env.PORT || 8888 //port
const hostname = process.env.HOST_NAME;

//config template engine
configViewEngine(app)

//khai báo route
app.use("/", webRoutes)

//test connection
// Create the connection to database
const connection = mysql.createConnection({
    port: 3307, //default: 3306
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'hoidanit',
});

// A simple SELECT query
connection.query(
    'SELECT * FROM Users u;',
    function (err, results, fields) {
        console.log(">>> results: ", results); // results contains rows returned by server
        console.log(">>> fields: ", fields); // fields contains extra meta data about results, if available
    }
);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})