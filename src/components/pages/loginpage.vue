<template>
  <div id="app">
    <Nav></Nav>
    <main>
      <article>
        <section class="section-top">用户登录</section>
        <section class="section-center"></section>
        <section class="section-bottom">
          <div class="login-wx">
            <div class="a">微信登录</div>
            <div><img class="wx-img" src="http://127.0.0.1:3000/picture/wx.png"></div>
            <div class="c">
              "请使用微信扫描二维码登录"<br>
              "信息采集系统"
            </div>
          </div>
          <Login></Login>
        </section> 
      </article>
    </main>
    <Footer></Footer>
  </div>
  </template>
  
  <script>
    import Nav from "same/src/components/common/Nav.vue";
    import Login from "same/src/components/common/Login.vue";
    import Footer from "same/src/components/common/Footer.vue";
  export default{
    data: ()=>{
      return {
        
      }
    },
    components: {
      Nav:Nav,
      Login: Login,
      Footer: Footer
    }
  }
  </script>
  
  
  <style scoped>
  #app{
    height: 100%;
  }
  article{
    width: 65%;
    background-color: #fff;
    padding: 30px 24px;
    margin: 30px auto;
  }
  .section-top{
    color: #333;
    font-size: 24px;
  }
  .section-center{
    margin-top: 30px;
    border-top: 1px dashed #ececec;
  }
  .section-bottom{
    display: flex;
    justify-content: space-between;
    height: 340px;
    /*align-items: center;*/
  }
  .login-wx{
    width: 45%;
    border-right: 1px solid #ddd;
    margin-top: 22px;
  }
  .login-wx>.a{
    text-align: center;
    color: #333;
    font-size: 16px;
    margin-top: 17px;
  }
  .login-wx>.c{
    text-align: center;
    color: #999;
    font-size: 12px;
  }
  .wx-img{
    display: block;
    width: 199px;
    height: 199px;
    margin: 0 auto;
    margin-top: 15px;
    border: 1px solid #E2E2E2;
  }
  </style>