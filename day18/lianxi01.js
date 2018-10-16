var express = require("express");
var cookieParser = require("cookie-parser");
var app = express();
app.listen(4000);
app.use(cookieParser());
app.set("view engine","ejs");

app.get("/",function(req,res){
  console.log(req.cookies.username);
  // res.send("获取成功");
  if(req.cookies.username){
    res.send("欢迎您 "+req.cookies.username);
  }else{
    res.render("login");
  }
});
app.get("/login",function(req,res){
  var uname = req.query.uname;
  var upass = req.query.upass;
  if(uname == "qwe" && upass == "123"){
    // 登陆成功,保存用户信息
    res.cookie("username",uname,{maxAge:10000});
    res.cookie("password",upass,{maxAge:10000});
    res.send("欢迎您 "+uname);
  }else{
    res.send("用户名密码错误");
  }
});