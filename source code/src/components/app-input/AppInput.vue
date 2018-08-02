<template>
<div>
    <input 
    :type="type"
    class="form-control m-input" 
    :placeholder="placeholder"
    :name="name"
	v-model="inputValue"
	@input="inputChange"
	v-validate="validate"
    />
    <span class="form-control-feedback" v-show="errors.has(name)">{{errors.first(name)}}</span>
</div>
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
    placeholder: String,
    name: {
      type: String,
      required: true
    },
    validate: {
      type: [String, Object]
    }
  },
  data() {
    return {
      inputValue: this.value
    };
  },
  methods: {
    /**
     * Hàm được gọi khi giá trị của input được thay đổi từ bên trong
     */
    inputChange() {
      this.$emit("input", this.inputValue);
    }
  },
  mounted() {}
};
</script>
