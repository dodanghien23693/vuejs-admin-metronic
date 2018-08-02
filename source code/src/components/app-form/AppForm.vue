<template>
<div>
<form >
    <h1>Content form ở phía dưới</h1>
    <slot></slot>
</form>
 </div>
</template>

<script>
/**
 * #### app-form dùng để quản lý form: quản lý hàm xử lý khi submit, thực hiện validate dữ liệu
 */
import $ from "jquery";
import validate from "jquery-validation";
export default {
  name: "app-form",
  props: {
    /**
     * Là 1 object dùng để cấu hình các input cần validation
     */
    rules: {
      type: Object
    },
    /**
     * Hàm thực hiện khi submit form
     */
    formSubmit: {
      type: Function
    }
  },
  methods: {
    // doSubmit() {
    // }
  },
  mounted() {
    $(this.$el)
      .find("form")
      .validate({
        rules: this.rules,
        messages: {
          name: "Hãy nhập họ tên",
          email: {
            required: "Hãy nhập email",
            email: "Hãy nhập email hợp lệ"
          }
        },
        errorClass: "form-control-feedback",
        invalidHandler: function(event, validator) {
          console.log(event);
          console.log(validator);
          mUtil.scrollTop();
        },
        submitHandler: function(form) {
          console.log("ko co lio");
          form[0].submit(); // submit the form
        }
      });
  }
};
</script>
<style scoped>
.error-lable {
  color: red;
}
</style>
