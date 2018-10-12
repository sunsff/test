var express = require("express");
var db = require("../day15/db/db");
var bdParser = require("body-parser");
var sd = require("silly-datetime");
var app = express();
app.listen(4000);

var time = new Date();
console.log(time);

app.set("view engine","ejs");
app.use(express.static("./public"));


app.get("/",function(req,res){
  db.findAll("message",function(err,docs){
    if(err){
      console.log(err);
    }else{
      console.log(docs);
      res.render("index",{msg:docs}); 
    }
  });
});
// app.get("/tijiao",route.tijaio);
