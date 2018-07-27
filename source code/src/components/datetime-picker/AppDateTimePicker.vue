<template>
    <input type="text" class="form-control" ref="input" id="m_datetimepicker_2_modal" :value="this.value" placeholder="Select date &amp; time">
</template>

<script>
export default {
  name: "app-datetime-picker",
  props: {
    /**
     * @Model
     */
    value: {
      type: String
    },
    /**
     * Chuỗi định dạng ngày tháng (optional)
     */
    format: {
      type: String
    }
  },
  created: function() {},
  mounted() {
    this.$emit("input", moment(this.value).format(this.format.toUpperCase()));
    this.$refs.input.value = moment(this.value).format(
      this.format.toUpperCase()
    );
    let self = this;
    $(this.$el)
      .datetimepicker({
        todayHighlight: !0,
        autoclose: !0,
        pickerPosition: "bottom-left",
        format: self.format
      })
      .on("hide", function(e) {
        self.$emit("input", moment(e.date).format(self.format.toUpperCase()));
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
