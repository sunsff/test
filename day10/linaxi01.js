var fs = require("fs");

fs.mkdir("./project",function(err,data){
  if(err){
    console.log("创建失败");
    console.log(err);
  }else{
    console.log("创建成功");
  }
});
fs.mkdir("./project/css",function(err,data){
  if(err){
    console.log("创建失败");
    console.log(err);
  }else{
    console.log("创建成功");
  }
});
fs.writeFile("./project/css/index.css",function(err,data){
  if(err){
    console.log("创建失败");
    console.log(err);
  }else{
    console.log("创建成功");
  }
});

fs.mkdir("./project/js",function(err,data){
  if(err){
    console.log("创建失败");
    console.log(err);
  }else{
    console.log("创建成功");
  }
});
fs.writeFile("./project/js/index.js",function(err,data){
  if(err){
    console.log("创建失败");
    console.log(err);
  }else{
    console.log("创建成功");
  }
});

fs.mkdir("./project/img",function(err,data){
  if(err){
    console.log("创建失败");
    console.log(err);
  }else{
    console.log("创建成功");
  }
});0