var file = require("./file");

// 展示首页
exports.showIndex = function(req,res){
  file.getDirs(function(err,files){
    if(err){
      console.log(err);
      res.send("读取目录失败");
    }else{
      res.render("index",{dirs:files}); // 返回正确结果
    }
  });
}
// 显示图片
exports.showPics = function(req,res){
  var dirName = req.params.dirName;
  file.getPics(dirName,function(err,files){
    if(err){
      console.log(err);
      res.send("读取图片出错");
    }else************************


  });
}