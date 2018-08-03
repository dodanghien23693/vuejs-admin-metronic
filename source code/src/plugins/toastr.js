import Vue from "vue/dist/vue.js";

// Bind toastr to Vue.
Object.defineProperty(Vue.prototype, "$toastr", {
  get() {
    return toastr;
  }
});
