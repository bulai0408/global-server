var express = require('express');
var router = express.Router();
// var mongoose = require("mongoose");


// var Schema = mongoose.Schema;
// //骨架模版
// var userSchema = new Schema({
//   username: String,
//   password: String
// })
// //模型
// var User = mongoose.model('User', userSchema);
//存储数据
// var user = new User({
//   name: 'ssx'
// })
// var user = new User();
//保存数据库
// User.findOne({ _id: '5bc93c75795757da7b828c43' }, function (err, obj) {
//   if (err) {
//     console.log('保存失败')
//     return;
//   }
//   console.log(obj);
// });

/* GET records listing. */

router.get('/', function (req, res, next) {
  res.send('one recordsssss');
});



module.exports = router;
