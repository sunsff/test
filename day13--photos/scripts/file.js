var fs = require("fs");

// 读取文件夹
exports.getDirs = function(callback){
  fs.readdir("./uploads",function(err,files){
    callback(err,files);
  });
}
// 读取文件夹中图片
exports.getPics = function(dirName,callback){
  fs.readdir("./uploads"+dirName),function(err,files){
    callback(err,files);
  });
}