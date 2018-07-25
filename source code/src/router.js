import Vue from "vue/dist/vue.js";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/admin",
      name: "admin",
      component: () => import("@/pages/Admin"),
      children: [
        {
          path: "profile",
          name: "admin.profile",
          component: () => import("@/pages/account/ProfilePage.vue")
        },
        {
          path: "user",
          name: "admin.user.list",
          component: () => import("@/pages/user/UserListPage.vue")
        },
        {
          path: "user/add",
          name: "admin.user.add",
          component: () => import("@/pages/user/CreateUserPage.vue")
        },
        {
          path: "user/:id",
          name: "admin.user.detail",
          component: () => import("@/pages/user/DetailUserPage.vue")
        }
      ]
    },
    {
      path: "/",
      redirect: "/admin"
    }
  ]
});
