var express = require("express");
var MongoClient = require("mongodb").MongoClient;
// var bdParser = require("body-parser");
var app = express();
app.listen(4000);

app.set("view engine","ejs");

app.get("/",function(req,res){
  var url = "mongodb://localhost:27017";
  MongoClient.connect(url,function(err,client){
    if(err){
      // 连接服务器失败
      console.log(err);
      res.send("连接服务器失败");
      return;
    }
    var coll = client.db("web1807").collection("student");
    coll.find({}).toArray(function(err,docs){
      if(err){
        console.log(err);
        res.send("查询失败");
      }else{
        res.render("lianxi03",{stus:docs});
      }
      client.close();
    });
  });
  // res.render("lianxi03");
});
