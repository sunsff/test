var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";
var dbName = "web1807";
var collection = "student";

// 连接服务器
MongoClient.connect(url,function(err,client){
  if(err){
    console.log(err);
    return;
  }
  // client获取数据库
  var db = client.db(dbName);
  // 获取集合
  var coll = db.collection(collection);

  // db.student.update({},{})
    /* coll.updateMany({id:107},{$set:{sex:"F"}},function(err,result){
      if(err){
        console.log(err);
        return;
      }
      console.log(result);
      client.close();
    }); */
  
  // db.student.find({})
  coll.find({age:{$gte:40}}).toArray(function(err,result){
    if(err){
      console.log(err);
      return;
    }
    console.log(result);
    client.close();
  });
  /* coll.find({age:{$gte:40}},function(err,result){
    if(err){
      console.log(err);
      return;
    }
    console.log(result);
    client.close();
  }); */

});