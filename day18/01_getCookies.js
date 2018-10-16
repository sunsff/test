var express = require("express");
var cookieParser = require("cookie-parser"); // 引入模块
var app = express();
app.listen(4000);

app.use(cookieParser());

// 设置cookie
app.get("/setCookie",function(req,res){
  // 设置2个cookie,username,password
  res.cookie("username","qwe");
  res.cookie("password","123");
  res.send("设置cookie成功");
});
// 获取cookie
app.get("/getCookie",function(req,res){
  console.log(req.cookies);
  res.send("获取成功");
});
