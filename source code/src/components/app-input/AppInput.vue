<template>
    <input :type="type" v-on:change="inputChange()" ref="input" :value="value" class="form-control m-input" :placeholder="placeholder"/>
</template>
<script>
/**
 * app-input sử dụng cho các component input kiểu : text, email, number
 */
export default {
  name: "app-input",
  props: {
    /**
     * @Model
     */
    value: [String, Number],
    /**
     * Kiểu giá trị của input
     */
    type: {
      type: String
    },
    /**
     * PlaceHolder
     */
    placeholder: String
  },
  methods: {
    /**
     * Hàm được gọi khi giá trị của input được thay đổi từ bên trong
     */
    inputChange() {
      this.$emit("input", this.$refs.input.value);
    }
  }
};
</script>
