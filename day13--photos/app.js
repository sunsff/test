var express = require("express");
var route = require("./scripts/route"); // 引用路由
var app = express();
app.listen(4000);

// 视图模板
app.set("view engine","ejs");
// 根目录
app.use(express.static("./public"));
app.use(express.static("./uploads"));

app.get("/",route.showIndex);
app.get("/show/:dirName",route.showPics);
app.get("/toUpload",route.toUpload); // 跳转上传页
app.post("/doUpload",route.doUpload);
app.get("/newDir",route.newDir); // 跳转
app.post("/newDir",route.doCreate); // 新建