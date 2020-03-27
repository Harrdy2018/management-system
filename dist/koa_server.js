const Koa=require("koa");
const myreadfile=require("./readfile/index.js");
const bodyParser = require('koa-bodyparser');
const app=new Koa();
app.use(bodyParser());

const api=require("./mongodb/interface.js");

app.use(async ctx=>{
  console.log(ctx.url,ctx.method);
  if(ctx.method==="GET"){
    if(ctx.url==="/"){
      ctx.body=await myreadfile.readTextFile(__dirname+"/index.html");
    }else if(ctx.url==="/app.js"){
      ctx.res.writeHead(200,{
        "Content-Type": "text/javascript"
      });
      ctx.res.write(await myreadfile.readTextFile(__dirname+"/app.js"));
      ctx.res.end("");
    }else if(/.(png|jpg)$/.test(ctx.url)){
      ctx.res.writeHead(200,{
        "Content-Type": "image/jpeg"
      });
      let imageData=await myreadfile.readPictureFile(__dirname+ctx.url);
      ctx.res.write(imageData,"binary");
      ctx.res.end("");
    }else if(/.woff$/.test(ctx.url)){
      ctx.res.writeHead(200,{
        "Content-Type": "application/x-font-woff"
      });
      let fontData=await myreadfile.readPictureFile(__dirname+ctx.url);
      ctx.res.write(fontData,"binary");
      ctx.res.end("");
    }else if(/.ttf$/.test(ctx.url)){
      ctx.res.writeHead(200,{
        "Content-Type": "application/x-font-truetype"
      });
      let fontData=await myreadfile.readPictureFile(__dirname+ctx.url);
      ctx.res.write(fontData,"binary");
      ctx.res.end("");
    }
  }
   
  if(ctx.method==="POST"){
    if(ctx.url==="/registe"){
      ctx.res.writeHead(200,{
        "Content-Type": "application/json"
      });
      let postData=ctx.request.body;
      let isHave=await api.queryIfUser(postData);
      let data={};
      if(isHave){
        data={
          status: "404",
          msg: "the user is exist!"
        }
      }else{
        api.insertNewUser(postData);
        data={
          status: "200",
          msg: "insert user success!"
        }
      }
      ctx.res.write(JSON.stringify(data));
      ctx.res.end("");
    }
  }
});

app.listen(3000,()=>{
  console.log("the server is running at port 3000");
})
