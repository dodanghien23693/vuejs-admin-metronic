<template>
  <input type="text" class="form-control m-input" v-model="timeok" placeholder="Select time">
</template>

<script>
export default {
  name: "app-time-picker",
  props: ["time"],
  data() {
    return {
      timeok: this.time
    };
  },
  mounted() {
    $(this.$el).timepicker({
      defaultTime: "11:45:20 AM",
      minuteStep: 1,
      showSeconds: true,
      showMeridian: true
    });
  },
  beforeDestroy() {}
};
</script>
