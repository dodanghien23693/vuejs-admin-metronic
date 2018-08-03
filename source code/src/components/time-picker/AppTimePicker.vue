<template>
  <input type="text" class="form-control m-input" ref="input" :value="value" placeholder="Select time">
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
    let self = this;

    $(this.$refs.input)
      .timepicker({
        minuteStep: 1,
        defaultTime: "",
        showSeconds: !0,
        showMeridian: !1,
        snapToStep: !0
      })
      .on("changeTime.timepicker", e => {
        self.$emit("input", e.currentTarget.value);
      });
  },
  beforeDestroy() {}
};
</script>
