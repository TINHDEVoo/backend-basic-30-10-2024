const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World ti he 2!')
})


router.get('/abc', (req, res) => {
    res.send('abc!')
})


router.get('/test', (req, res) => {
    // res.send('<h1>abc!</h1>')
    res.render('sample.ejs')
})


module.exports = router;