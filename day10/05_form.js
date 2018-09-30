var http = require('http');
var fs = require("fs");
var qs = require("querystring");
var fd = require("formidable");

var server = http.createServer(function (req, res) {
  if (req.url == '/favicon.ico') {
    return;
  }
  // localhost:4000 打开form表单页面
  if(req.url == "/"){ // 读取form页面
    fs.readFile("./05_form.html",function(err,data){
      if(err){
        console.log("读取页面失败");
        return;
      }
      // 读取成功,将读取到的数据加载显示在页面上
      res.end(data);
    });
  }
  if(req.url == "/tijiao" && req.method.toLowerCase() == "post"){
    // 因为nodejs是单线程非I/O阻塞,为了追求效率,数据时一小段一小段的上传
    // 这样就会产生2种状态:正在接受,接收完成

    // 提前声明一个变量,用于保存每一次得到的一小段的数据
    var allData = "";
    // data:表示正在接收数据的状态,
    // chunk:表示每次接收到的一小段数据
    // addListener与on方法功能一样
    req.addListener("data",function(chunk){
      // 拼接每次得到的小段数据
      allData += chunk;
    });
    // end: 表示接收完成的状态,当数据全部接收完毕,进入该状态
    req.addListener("end",function(){
      // 进入接受完成状态,说明数据已经接受完毕
      console.log(allData);
      // 将字符串的参数,通过querystring模块转换为对象类型
      var obj = qs.parse(allData);
      console.log(obj);
      res.end(); // 返回响应
    })
  }

  // 创建表单对象
  var form = fd.IncomingForm();
  form.parse(req.function(err,fields,files){
    if(err){
      console.log(err);
      red.end("请求失败");
      return;
    }
    console.log("fields");
    console.log(fields);
    console.log("files");
    console.log(files);
    res.end("请求成功");
  })
});
server.listen(4000, 'localhost');