import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

//login
import loginpage from "same/src/components/pages/loginpage.vue";

//register
import entry from "same/src/components/pages/register/entry.vue";
import notice from "same/src/components/pages/register/notice.vue";
import registe from "same/src/components/pages/register/registe.vue";

const router=new VueRouter({
  mode: "hash",
  routes: [
    {
      path: "/pages/login.html",
      name: "loginpage",
      component: loginpage
    },{
      path: "/pages",component: entry,
      children: [
        {
          path: "register_notice.html",
          component: notice
        },{
          path: "register.html",
          component: registe
        }
      ]
    }
  ]
})


export default router;