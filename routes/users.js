var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");

var Schema = mongoose.Schema;
//骨架模版
var userSchema = new Schema({
  username: { type: String, unique: true },
  password: String
})
//模型
var User = mongoose.model('User', userSchema);

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log(username,password);
  User.findOne({ username, password }, (err, obj) => {
    if (err) {
      res.json({ msg: '查询出错' })
      return;
    }
    if (obj) {
      res.json({ msg: '登录成功' });
    } else {
      res.json({ msg: '用户名不存在或密码错误' })
    }
  })
})

router.post('/register', (req, res) => {
  const { username, password } = req.body;
  const user = new User({
    username,
    password
  });
  user.save((err) => {
    if (err) {
      res.json({ msg: '该用户名已被注册' });
      return;
    };
    res.json({ msg: '注册成功' })
  })
})

module.exports = router;
