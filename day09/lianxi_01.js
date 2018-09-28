var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
  if (req.url == '/favicon.ico') {
    return;
  }
  if(req.url=="/circle"){
    fs.readFile("./circle.html",function(err,data){
      if(err){
        res.end("读取页面出错");
      }else{ // 读取整除,返回数据
        res.end(data);
      }
    });
  }else if(req.url=="/square"){
    fs.readFile("./square.html",function(err,data){
      if(err){
        res.end("读取页面出错");
        return ; // 不让后面的代码再执行
      }
      res.end(data);
    });
  }else{
    res.end("地址错误");
  }
});
server.listen(4000, 'localhost');