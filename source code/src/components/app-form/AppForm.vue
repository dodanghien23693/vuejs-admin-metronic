<template>
<form>
    <h1>Content form ở phía dưới</h1>
    <button v-on:click="doSubmit()">test submit</button>
    <slot></slot>
    
</form>
</template>

<script>
/**
 * #### app-form dùng để quản lý form: quản lý hàm xử lý khi submit, thực hiện validate dữ liệu
 */
export default {
  name: "app-form",
  props: {
    /**
     * Hàm thực hiện khi submit form
     */
    formSubmit: {
      type: Function
    }
  },
  methods: {
    doSubmit() {
      this.$slots.default.forEach(vNode => {
        debugger;
      });
    }
  }
};
</script>
