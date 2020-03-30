# management-system
### 信息登记系统
# To start
```
# install dependencies
npm install

# koa-server run at http://127.0.0.1:3000
npm run koa_server

# build for production with minification
npm run start

# entry the app and see
http://127.0.0.1:3000/#/pages/login.html
```
### 技术栈
* Font-End JS+HTML+CSS+Vue+Vuex+Vue-Router
* Back-End Koa+MongoDB+NodeJS
### 实现功能
#### 注册功能
* 注册须知功能
* 注册登记功能
* 注册提交功能
#### 注册登录验证码功能
```html
<!--
 <meta charset="utf-8"> 一定要写上，短信提交内容有中文，容易出现乱码现象
 action 云片短信验证码功能，新用户可以免费试用10次
 apikey 云片apikey
 mobile 发短信给谁
 text   签名+内容模板
 在开发之前首先要验证签名和模板，每一次验证在30分钟以内，联系客服小姐姐可以节省时间
-->
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>验证码功能实现</title>
  </head>
  <body>
    <form action="https://sms.yunpian.com/v2/sms/single_send.json"
      method="POST"
      enctype="application/x-www-form-urlencoded">
      <input name="apikey" value=""><br>
      <input name="mobile" value=""><br>
      <input name="text" value=""><br>
      <button type="submit">submit</button>
    </form>
  </body>
</html>
```
#### mongodb 数据库功能
* 目前只支持 数据库插入和查询功能 (忙着赶毕业大论文没时间做)
### 整体页面如下
* 入口 ```http://127.0.0.1:3000/#/pages/login.html```
![image](./introduce/pages_login.png)
* 点击注册进入注册页面的第一阶段
![image](./introduce/pages_register_notice.png)
* 点击同意 登记信息并提交到数据库
![image](./introduce/pages_register.png)