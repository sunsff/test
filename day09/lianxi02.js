var http = require("http");
var fs = require("fs");
var url = require("url");
var server = http.createServer(function(req,res){
  if(req.url=="/favicon.ico"){
    return ;
  }
  res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});

  // 调用url模块的parse方法,转换req.url字符串
  var urlObj = url.parse(req.url,true);
  var pathname = urlObj.pathname; // 获取请求路径
  var query = urlObj.query; // 获取请求路径对象
    if(pathname=="/"){
      // 显示form页面
      fs.readFile("./form.html",function(err,data){
        if(err){
          console.log(err);
          res.end("读取页面出错");
          return;
        }
        res.end(data);
      });
    }else if(pathname=="/tijiao"){
      console.log(req.url);
      // res.end("接受到请求数据");
      var username = query.username;
      var password = query.password;
      console.log(username,password);
      res.end("用户名"+username+"密码"+password);
    }else{
      // 其他情况,不作处理,直接返回
      res.end("请求地址出错");
    }
});
server.listen(4000,"localhost");