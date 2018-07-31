<template>
  <input type="text" class="form-control m-input" ref="input" :value="this.value" placeholder="Select time">
</template>

<script>
export default {
  name: "app-time-picker",
  props: {
    /**
     * @description Giá trị value kiểu String vd: 24:10:23
     */
    value: {
      type: String
    }
  },
  mounted() {
    this.$emit("input", this.value);
    // this.$refs.input.value = moment(this.value).format("HH:MM:SS");
    let self = this;
    $(this.$el).timepicker({
      minuteStep: 1,
      defaultTime: "",
      showSeconds: !0,
      showMeridian: !1,
      snapToStep: !0
    });
    $(this.$el).on("change", function(time) {
      self.$emit("input", time.currentTarget.value);
    });
  },
  beforeDestroy() {}
};
</script>
