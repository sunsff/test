function showIndex(req,res){
  res.write(req.url+"<br>");
  res.end("这是首页");
}
function showInfo(req,res){
  res.write(req.url+"<br>");
  res.end("信息页");
}
function showError(req,res){
  res.write(req.url+"<br>");
  res.end("这是错误页面");
}
exports.showIndex = showIndex;
exports.showInfo = showInfo;
exports.showError = showError;