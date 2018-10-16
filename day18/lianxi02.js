var express = require("express");
var session = require("express-session");
var app = express();
app.listen(4000);
app.set("view engine","ejs");

app.use(session({
  secret: "keyboard dog",
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge:1000*60*60*24*365*1000}
}));
app.get("/",function(req,res){
  console.log(req.session);
  var uname = req.session.username;
  var upass = req.session.password;
  if(uname && upass){
    res.send("欢迎您:"+uname+"<a href='/logout'>退出登录</a>");
  }else{
    res.render("login");
  }
});
app.get("/login",function(req,res){
  var uname = req.query.uname;
  var upass = req.query.upass;
  if(uname == "qwe" && upass == "123"){
    // 保存信息
    req.session.username = uname;
    req.session.password = upass;
    res.send(uname+"登陆成功"+"<a href='/'>返回主页</a>");
  }else{
    res.send("用户名密码错误");
  }
});
// 处理 /logout 请求,退出登录
app.get("/logout",function(req,res){
  // 删除session
  req.session.destroy(function(err){
    if(err){
      res.send("退出失败");
    }else{
      res.redirect("/");
    }
  });
});