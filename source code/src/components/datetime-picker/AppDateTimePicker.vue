<template>
  <input type="text" class="form-control" 
    ref="input"
    :value="value"
    :name="name"
   />
   
</template>

<script>
export default {
  name: "app-datetime-picker",
  props: {
    /**
     * giá trị cần hiển thị
     */
    value: {
      type: String
    },
    /**
     * Chuỗi định dạng ngày tháng (optional)
     */
    format: {
      type: String
    },
    name: String
  },
  created: function() {},
  mounted() {
    // this.$emit("input", moment(this.value).format(this.format.toUpperCase()));

    // this.$refs.input.value = moment(this.value).format(
    //   this.format.toUpperCase()
    // );

    let self = this;
    $(this.$refs.input)
      .datetimepicker({
        todayHighlight: !0,
        autoclose: !0,
        pickerPosition: "bottom-right",
        format: self.format
      })
      .on("hide", function(e) {
        let newValue = moment(e.date).format(self.format.toUpperCase());
        self.$refs.input.value = newValue;
        self.$emit("input", newValue);
      });
  },
  methods: {
    /**
     * Hàm khởi tạo Component
     *
     * @public
     */
    init() {}
  },
  beforeDestroy: function() {
    //destroy datetimepicker
  }
};
</script>
