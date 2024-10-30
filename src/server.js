const express = require('express') //commenjs
const path = require('path')
require('dotenv').config()
// import express form 'express' //es modules


const app = express()//app express
const port = process.env.PORT || 8888 //port
const hostname = process.env.HOST_NAME;

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')



//config static file 
app.use(express.static(path.join(__dirname, 'public')))
//khai báo route
app.get('/', (req, res) => {
    res.send('Hello World ti he 2!')
})


app.get('/abc', (req, res) => {
    res.send('abc!')
})


app.get('/test', (req, res) => {
    // res.send('<h1>abc!</h1>')
    res.render('sample.ejs')
})

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})