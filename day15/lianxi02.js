var MongoClient = require("mongodb").MongoClient;

var express = require("express");
var bdParser = require("body-parser");
var app = express();
app.listen(4000);

app.set("view engine","ejs");

// 设置请求解析的方式 application/x-www-form-urlencoded
app.use(bdParser.urlencoded({extended:true}))

app.get("/",function(req,res){
  res.render("lianxi02");
});

// 处理post发送的请求
app.post("/lianxi02",function(req,res){
  // 获取请求参数
  var params = req.body;
  // console.log(params);
  var username = params.username; // 获取
  var pwd = params.password;
  var json = {name:username,pwd:pwd};
  var url = "mongodb://localhost:27017";

  MongoClient.connect(url,/* {urlNewUrlParser:true}, */function(err,client){
    if(err){
      // 连接服务器失败
      console.log(err);
      res.send("连接服务器失败");
      return;
    }
    var coll = client.db("web1807").collection("student");
    coll.find(json).toArray(function(err,docs){
      if(err){
        console.log(err);
        res.send("登录失败");
      }else{
        if(docs.length>0){
          res.send("登录成功");
        }else{
          // 没有查到数据,docs长度为0
          res.send("登录失败,用户名或密码错误");
        }
        // console.log(docs);
      }
      client.close();
    });
  });


});