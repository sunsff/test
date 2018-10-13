var express = require("express");
var app = express();
app.listen(4000);

app.set("view engine","ejs");


app.get("/",function(req,res){
  res.render("index");
  console.log(req.query.uname);
});

// 处理点submit请求
app.get("/tijiao",function(req,res){
  // 获取参数
  var uname = req.query.uname;
  var upass = req.query.upass;
  // 判断对不对
  if(uname == "qwe" && upass == "123"){
    // 用户名密码正确
    // 跳转到登陆成功页面之前,先保存登录状态
    res.cookie("uname",uname,{maxAge:10000});
    res.cookie("upass",upass,{maxAge:10000});
    res.send("登陆成功");
  }else{
    res.send("用户名或密码错误");
  }
});