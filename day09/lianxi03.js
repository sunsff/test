var fs = require("fs");

fs.readdir("./a",function(err,files){
  if(err){
   console.log(err); 
   return;
  }
  // for(var i=0;i<files.length;i++){
  //   console.log(files[i]);
    // var result = fs.statsSync("./a/"+files[i]);
    // consoe.log(result);
    
    // 异步出问题
    /* fs.stat("./a/"+files[i],function(err,stats){
        if(stats.isBlockDevice()){
          console.log(files[i]+"是文件夹");
        }else{
          console.log(files[i]+"是文件");
        }
    }); */

    // 递归
    console.log('文件:');
    (function a(i){
      // 先判定递归结束的条件
      if(i==files.length){ // 当i与数组长度一样,说明遍历结束
        // console.log("递归结束");
        return;
      }
      // 遍历没有结束,检查每一个元素的状态
      fs.stat("./a/"+files[i],function(err,stats){
        if(err){
          console.log(err);
          return;
        }
        if(stats.isFile()){
          console.log(files[i]);
        }
        a(++i); // 自调
      });
      // 打印i并自增1
      // console.log(++i);
      // 自调
      // a(i)
    })(0);


  // }
});