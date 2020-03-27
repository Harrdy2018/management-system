const database=require("./db.js");
//Collection
let users=database.users;

//查询 users 集合所有
let queryUsers=function(){
  return new Promise((resolve,reject)=>{
    users.find((err,data)=>{
      if(err){
        reject(err);
      }else{
        console.log(data);
        resolve(data);
      }
    })
  })
}
//条件查询
let queryIfUser=function(obj){
  let wherestr={tel: obj.tel};
  return new Promise((resolve,reject)=>{
    users.find(wherestr,(err,res)=>{
      if(err){
        reject(err);
      }else{
        console.log(res);
        if(res.length===0){
          resolve(0);
        }
        resolve(1);
      }
    })
  }) 
}
//insert
function insertNewUser(obj) { 
  obj.type=1;
  var user = new users(obj)
  user.save(function (err, res) {
    if(err){
      console.log(err);
    }else{
      console.log(res);
    }
  })
}
module.exports={
  queryUsers,
  queryIfUser,
  insertNewUser
}