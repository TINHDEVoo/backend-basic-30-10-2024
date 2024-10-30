const connection = require('../config/database')

const getHomepage = (req, res) => {
    res.render('home.ejs')
}

const getAbc = (req, res) => {
    res.send('abc!')
}

const getHoidanit = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage, getAbc, getHoidanit
}