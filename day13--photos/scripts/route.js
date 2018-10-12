var file = require("./file");
var fd = require("formidable");
var sd = require("silly-datetime");

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
    }else{
      res.render("show",{pics:files,dirName:dirName});
    }
  });
}

// 跳转上传页
exports.toUpload = function(req,res){
  file.getDirs(function(err,files){
    res.render("upload",{dirs:files});
  });
}
// post的 /doUpload 请求,上传图片
exports.doUpload = function(req,res){
  var form = new fd.IncomingForm();
  form.uploadDir = "./";
  form.parse(req,function(err,fileds,files){
    if(err){
      console.log(err);
      res.send("上传失败,稍后再试");
    }else{
      var dirName = fileds.dirName;
      var oldPath = files.pic.path;
      var name = files.pic.name;
      var arr = name.split(".");
      var ext = arr[arr.length-1]; // 后缀名
      var time = sd.format(new Date(),"YYYYMMDDHHmmss");
      var newPath = "./uploads/"+dirName+"/"+time+"."+ext;
      file.save(oldPath,newPath,function(err){
        if(err){
          console.log(err);
          res.send("重命名失败");
        }else{
          res.redirect("/show/"+dirName);
        }
      });
    }
  });
}
