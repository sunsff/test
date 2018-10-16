var express = require("express");
var session = require("express-session");
var app = express();
app.listen(4000);

// 配置session
app.use(session({
  secret: "keycat",
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge:99999999}
}));

// var history = [];

// 处理 /search 请求,每一次都将用户搜索的结果全部显示在页面上
app.get("/search",function(req,res){
  // 获取搜索的参数
  var name = req.query.name;
  // 获取session中曾经保存的history
  var history = req.session.history || [];

  // 判断输入的参数是不是Undefined或者是空字符串
  // 如果是,就不操作,如果不是就将其添加到历史数组中
  if(!(name == undefined || name.trim() == "")){
    // 先判断历史记录中是否已经保存了本次搜索记录
    history.push(name);
  }
  // 将history保存进session
  req.session.history = history;
  // jianglishi将历史记录显示在页面上
  res.send(history);
});