<template>
<div>
  <div class="content-box">
    <ul>
      <li>
        <span>1.</span>
        <span>所有个人资料必须真实无误，如有虚假信息，申请人将会被取消申请资格。</span>
      </li>
      <li>
        <span>2.</span>
        <span>请认真填写并审核自己的信息，在确认无误后，选择“提交”正式提交您的注册。</span>
      </li>
    </ul>
  </div>
  <div class="content-box" style="border: none;">
    <div>承诺书</div>
    <p>欢迎您使用本系统，请仔细阅读下列条款，您一旦注册成功，则意味着你已完全接受以下条款。</p>
    <p>
      <strong>您享有的权利</strong><br>
      1. 您只需登入个人账户，即可在线查询您的信息<br>
      2. 欢迎您为本系统工作完善提交各类建议和意见。
    </p>
    <p>
      <strong>您履行的义务</strong>
    </p>
    <ul>
      <li>
        <span>1.</span>
        <span>您向本系统提供的注册资料，包括姓名、地址、联系方式等，必须是真实、有 效、准确的。您输入的资料将由本人承担全部的责任，如发现您提供的资料存在虚假情况，我们有权在未通知您本人的情况下删除您的资料。</span>
      </li>
    </ul>
    <p>
      网络世界互联你我，招银网络科技招聘平台将会及时以电子邮件或短信的方式与您联系，或向您发送信息，请及时关注您的信息。
      <br>
      本协议的解释权归信息采集科技人力资源部所有。
    </p>
  </div>
  <div>
    <el-button type="primary" round v-on:click="agree()">同意</el-button>
    <el-button type="info" round v-on:click="disagree()">不同意</el-button>
  </div>
</div>
</template>
<script>
export default {
    methods: {
      agree(){
        this.$emit("transmitActive",2);
        this.$router.push({ path: '/pages/register.html' });
      },
      disagree(){
        this.$router.push({ path: '/pages/login.html' });
      }
    }
  }
</script>
<style scoped>
 .content-box{
    border-bottom: solid 1px #E9ECEF;
    line-height: 24px;
    color: #5C6773;
    font-size: 14px;
    margin: 30px 20px 0;
    padding: 0 0 30px;
  }
</style>