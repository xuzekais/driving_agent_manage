const express = require('express');
const router = express.Router();

/**
 * 用户接口
 */
router.use('/login',require('./login/login.js'))

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
