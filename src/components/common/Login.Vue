<template>
  <div class="login-form">
  <el-tabs type=""
    style="width:300px;">
    <el-tab-pane label="账号登录">
      <el-form ref="form" :model="form" label-width="80px">
          <el-input v-model="form.tel" placeholder="请输入手机号码" 
          style="width:300px;margin-top:5px;margin-bottom: 25px;"></el-input>
          <el-input v-model="form.pwd" placeholder="请输入登录密码"
          style="width:300px;margin-bottom: 25px;"
          show-password></el-input><br>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="短信登录">
      <el-form ref="formb" :model="formb" label-width="80px">
        <el-input 
        v-model="formb.tel" 
        placeholder="手机号码" 
        style="width:300px;margin-top:5px;margin-bottom: 25px;"></el-input>
        <div style="margin-bottom: 25px;">
          <el-input v-model="formb.text" placeholder="短信验证码"
          style="width:150px;"
          show-password></el-input>
          <el-button style="margin-left: 5px;"
          type="info"
          size="medium"
          round>点击获取验证码</el-button>
        </div>
    </el-form>
    </el-tab-pane>
  </el-tabs>
  <el-button 
  style="width: 300px;margin-bottom: 15px;"
  type="primary" 
  @click="doLogin()">登录</el-button>
  <div class="login-base-info">
    <a class="faq_list" href="#">查看 “常见问题”</a>
    <a class="forget_pwd right" href="#">忘记密码</a>
    <router-link class="register right" to="/pages/register_notice.html">注册</router-link>
  </div>
  </div>
</template>
<script>
export default{
  data(){
    return {
      form: {
        tel: '',
        pwd: ""
      },
      formb: {
        tel: "",
        text:""
      }
    }
  },
  methods: {
    doLogin: function(){
      console.log("登录");
    }
  }
}
</script>
<style scoped>
.login-form{
  width: 45%;
  margin-top: 29px;
}
.login-base-info{
  width: 300px;
}
.login-base-info .faq_list{
  font-size: 14px;
  color: #D69859;
  text-align: left;
}
.forget_pwd,.register{
  font-size: 14px;
  color: #4B9DE8;
  text-align: right;
}
.forget_pwd{
  margin-left: 12px;
}
</style>