let mongoose=require("mongoose");
let dbName="infomationsystem";
let dbUrl=`mongodb://127.0.0.1:27017/${dbName}`;

mongoose.connect(dbUrl,{useNewUrlParser:true},err=>{
  if(err){
    console.err(err);
  }else{
    console.log(`mongo database ${dbName} have connected`);
  }
});

const Schema=mongoose.Schema;

//people 在MongoDB 里面对应 一个集合 peoples
//module.exports=mongoose.model('people',userSchema);

module.exports={
  users: mongoose.model("users",
    new Schema({
      type: {type:Number},
      tel: {type: String},
      email: {type: String},
      studentNumber: {type: String},
      major: {type: String},
      domicileAddress: {type: String},
      EMS: {type: String},
      pwd: {type: String},
      name: {type: String},
    })
  )
}