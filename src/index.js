import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import App from "same/src/App.vue";
import router from "same/src/router/index.js";

Vue.use(ElementUI);

const app=new Vue({
  el: "#app-1",
  router,
  render: h=>h(App)
})