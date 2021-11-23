const express = require('express');
const router = express.Router();

const db = require('../db/index')

router.use('/test',async (req,res) =>{
  console.log('这里为什么会运行')
  db.query("select * from User", function(err, reslouts){
    console.log(err)
    console.log(reslouts)
  })
})
/**
 * 登录接口
 */
router.use('/login',require('./login/login.js'))

router.use('/user', require('./user/user.js'))

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
