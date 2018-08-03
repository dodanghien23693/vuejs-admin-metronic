<template>
<div>
<form class="m-form" v-on:submit.prevent="submitForm">
    <h1>Content form ở phía dưới</h1>
    <slot></slot>
</form>
 </div>
</template>

<script>
/**
 * #### app-form dùng để quản lý form: quản lý hàm xử lý khi submit, thực hiện validate dữ liệu
 */
export default {
  name: "app-form",
  inject: ["$validator"],
  props: {
    /**
     * Hàm thực hiện khi submit form
     */
    formSubmit: {
      type: Function
    }
  },
  methods: {
    submitForm() {
      this.$validator.validateAll().then(result => {
        //Nếu thành công thì mới gọi hàm
        if (result) {
          this.formSubmit();
        }
      });
    }
  },
  mounted() {}
};
</script>
