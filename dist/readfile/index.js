const fs=require("fs");

function readTextFile(path){
  return new Promise((resolve,reject)=>{
    fs.readFile(path,{encoding:"utf8",flag: "r+"},(err,data)=>{
      if(err){
        reject(err);
      }else{
        resolve(data);
      }
    });
  })
}

function readPictureFile(path){
  return new Promise((resolve,reject)=>{
    fs.readFile(path,{encoding:'binary',flag:"r+"},(err,data)=>{
			if(err){
				reject(err);
			}else{
				resolve(data);
			}
		});
  })
}


module.exports={
  readTextFile,
  readPictureFile
}