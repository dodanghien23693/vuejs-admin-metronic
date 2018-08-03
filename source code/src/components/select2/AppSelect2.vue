<template>
   <select ref="input"> 
    <option v-for="(opt,index) in options" :key="index" :value="opt.value">{{opt.title}}</option>
  </select>
</template>

<script>
export default {
  name: "app-select2",
  props: {
    /**
     * options là 1 mảng để chọn
     */
    options: {
      type: Array,
      default: []
    },
    /**
     *  placeholder
     */
    placeholder: {
      type: String,
      default: ""
    },
    /**
     *  Thuộc tính để cấu hình multiple hoặc không
     */
    multiple: {
      type: Boolean,
      default: false
    },
    /**
     * @model
     */
    value: [String, Array]
  },
  mounted() {
    var vm = this;
    $(this.$refs.input)
      .select2({
        placeholder: this.placeholder,
        multiple: this.multiple
      })
      .val(this.value)
      .trigger("change")
      .on("change", function() {
        // emit event on change.
        vm.value = $(this).val();
        vm.$emit("input", vm.value);
      });
  },
  watch: {
    options: function(options) {
      $(this.$el).select2({ data: options });
    }
  },
  destroyed: function() {
    $(this.$el)
      .off()
      .select2("destroy");
  }
};
</script>
