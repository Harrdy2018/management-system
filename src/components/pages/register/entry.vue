<template>
  <div>
    <Nav></Nav>
    <main>
      <article>
        <section class="section-top">用户注册</section>
        <section class="section-center"></section>
        <section class="section-bottom">
          <div class="register-process">
            <el-steps :active="active">
              <el-step title="step 1" description="用户须知"></el-step>
              <el-step title="step 2" description="注册账户"></el-step>
              <el-step title="step 3" description="注册成功"></el-step>
            </el-steps>
          </div>
        <router-view v-on:transmitActive="receiveActive"></router-view>
        </section>
      </article>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from "same/src/components/common/Nav.vue";
import Footer from "same/src/components/common/Footer.vue";
import notice from "same/src/components/pages/register/notice.vue";
export default {
    data() {
      return {
        active: 1
      };
    },
    components: {Nav,Footer,notice},
    methods: {
      receiveActive: function(active){
        this.active=active;
      }
    }
  }
</script>
<style scoped>
  article{
    width: 65%;
    margin: 30px auto;
    background-color: #fff;
    padding: 30px 25px;
  }
  .section-top{
    font-size: 24px;
    color: #C8152D;
    font-weight: 400;
  }
  .section-center{
    margin-top: 30px;
    border-top: 1px dashed #ececec;
  }
  .section-bottom{
    margin-top: 30px;
  }
</style>