<template>
  <header>
    <nav class="nav-right">
      <div class="login-register">
        <a href='#'>登录</a>
        <span>&nbsp;|&nbsp;</span>
        <a href="#">注册</a>
      </div>
      <ul>
        <li><a href="#">首页</a></li>
        <li><a href="#">信息采集栏目</a></li>
        <li><a href="#">信息采集栏目</a></li>
        <li><a href="#">信息采集栏目</a></li>
        <li><a href="#">常见问题</a></li>
        <li><a href="#">提交建议</a></li>
        <li><a href="#">人才推荐</a></li>
      </ul>
    </nav>

    <nav class="nav-left">
      <a href="#">
        <span><i class="iconfont icon-xinxicaiji"></i></span>
        <span class="fontlogo">信息采集系统</span>
      </a>
    </nav>
  </header>
</template>
<script>

</script>
<style scoped>
header{
  height: 70px;
  background-color: #fff;
}
.nav-right{
  float: right;
  width: 57%;
  height: 70px;
  margin-right: 10%;
}
.nav-right>.login-register{
    float: right;
    font-size: 0px;
    height: 70px;
    line-height: 70px;
  }
.nav-right>.login-register a{
  font-size: 12px;
  margin: 0px 3px;
}
.nav-right>.login-register span{
  font-size: 12px;
}
.nav-right>ul{
    float: right;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    font-size: 1rem;
    padding: 0px 10px;
}
.nav-left{
  height: 100%;
  position: relative;
  left: 0px;
  top:0px;
}
.nav-left .iconfont{
  font-size: 29px;
}
.nav-left .fontlogo{
  font-size: 25px;
}
.nav-left>a{
  position: absolute;
  width: 200px;
  height: 37px;
  top: 50%;
  left: 10%;
  text-decoration: none;
  transform: translateY(-50%);
  padding-left: 10px;
  /*background-color: aquamarine;*/
}
</style>