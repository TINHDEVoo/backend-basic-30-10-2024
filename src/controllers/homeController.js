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
const postCreateUser = (req, res) => {
    console.log(req.body)
    res.send("Create-user")
}

module.exports = {
    getHomepage, getAbc, getHoidanit, postCreateUser
}