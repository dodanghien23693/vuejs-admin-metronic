import Vue from "vue/dist/vue.js";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/axios";
import VeeValidate from "vee-validate";

Vue.use(VeeValidate);
// Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
