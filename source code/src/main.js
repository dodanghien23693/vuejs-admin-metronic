import Vue from "vue/dist/vue.js";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/axios";
import "./plugins/toastr";
import "./plugins/vue-validate";
import "./plugins/sweet-alert2";

// Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
