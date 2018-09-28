var fs = require("fs");

// 创建目录
fs.mkdir("./a",function(err,data){
  if(err){
    console.log("创建失败");
    console.log(err);
  }else{
    console.log("创建成功");
  }
});