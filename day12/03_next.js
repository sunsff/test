var express = require("express");
var route = require("./03_route_2_ext.js");
var app = express();
app.listen(4000);


app.get("/a/123",function(req,res){
  res.send("get /a 的学号是/a/123");
});
// 参数的传递与获取,与ng路由相似
// : 后面的会当成参数的属性,获取时,通过req来获取
// 带有参数时,请求路径不固定,尽量将精确匹配的路径写在上面
// 模糊匹配写在下面
app.get("/a/:id",function(req,res){
  var id = req.params.id;
  res.send("get /a 请求:"+id);
});
// 使用正则匹配
// 匹配 /aaa/123  3个字母,3个数字的请求
app.get(/^\/[a-z]{3}\/[1-9]{3}$/,function(req,res){
  console.log(req);
  res.send("符合规范");
});