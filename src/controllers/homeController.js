
const getHomepage = (req, res) => {
    //process data
    //call model
    res.send('Hello World ti he 2!')
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