var fs = require("fs");
console.log(1);
var start = new Date();
/* fs.readFile("./day09.txt","UTF-8",function(err,data){
  console.log(2);
  if(err){
    console.log(err);
  }else{
    console.log(data); // data.toString()
  }
});
console.log(3); */
var result = fs.readFileSync("./day09.txt");
var end = new Date();
console.log("程序一共花了"+(end-start)+"ms");