const express = require('express');
const { getHomepage, getAbc, getHoidanit, postCreateUser } = require('../controllers/homeController')
const router = express.Router();

router.get('/', getHomepage)
router.get('/abc', getAbc);
router.get('/test', getHoidanit)
router.post('/create-user', postCreateUser)

module.exports = router;