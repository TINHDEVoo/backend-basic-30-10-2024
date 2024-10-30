const express = require('express');
const { getHomepage, getAbc, getHoidanit } = require('../controllers/homeController')
const router = express.Router();

router.get('/', getHomepage)
router.get('/abc', getAbc);
router.get('/test', getHoidanit)

module.exports = router;