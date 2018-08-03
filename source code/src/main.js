import Vue from "vue/dist/vue.js";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/axios";
import "./plugins/toastr";

import VeeValidate from "vee-validate";
import VueSweetalert2 from "vue-sweetalert2";

// const config = {
//   aria: true,
//   classNames: {},
//   classes: false,
//   delay: 0,
//   dictionary: null,
//   errorBagName: "errors", // change if property conflicts
//   events: "input|blur",
//   fieldsBagName: "fields",
//   i18n: null, // the vue-i18n plugin instance
//   i18nRootKey: "validations", // the nested key under which the validation messages will be located
//   inject: true,
//   locale: "en",
//   strict: true,
//   validity: false
// };
Vue.use(VeeValidate);

Vue.use(VueSweetalert2);

// Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
