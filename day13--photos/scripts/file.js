var fs = require("fs");

// 读取文件夹
exports.getDirs = function(callback){
  fs.readdir("./uploads",function(err,files){
    callback(err,files);
  });
}
// 读取文件夹中图片
exports.getPics = function(dirName,callback){
  fs.readdir("./uploads/"+dirName,function(err,files){
    callback(err,files);
  });
}
// 保存
exports.save = function(oldPath,newPath,callback){
  fs.rename(oldPath,newPath,function(err){
    callback(err);
  });
}
// 新建文件夹
exports.createDir = function(dirName,callback){
  fs.mkdir("./uploads/"+dirName,function(err){
    callback(err);
  });
}