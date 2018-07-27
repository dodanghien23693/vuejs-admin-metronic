<template>
    <input type="text" class="form-control" ref="input" id="m_datetimepicker_2_modal" :value="this.value" placeholder="Select date &amp; time">
</template>

<script>
export default {
  name: "app-datetime-picker",
  props: ["value", "type"],
  created: function() {},
  mounted() {
    this.$emit("input", moment(this.value).format(this.type.toUpperCase()));
    this.$refs.input.value = moment(this.value).format(this.type.toUpperCase());
    let self = this;
    $(this.$el)
      .datetimepicker({
        todayHighlight: !0,
        autoclose: !0,
        pickerPosition: "bottom-left",
        format: self.type
      })
      .on("hide", function(e) {
        self.$emit("input", moment(e.date).format(self.type.toUpperCase()));
      });
  },
  beforeDestroy: function() {
    //destroy datetimepicker
  }
};
</script>
