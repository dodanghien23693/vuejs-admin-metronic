<template>

    <input type="text" class="form-control" ref="input"   :value="value" :name="name"/>

</template>
<script>
export default {
  name: "date-time",

  props: {
    value: {
      type: String
    },
    format: {
      type: String
    },
    name: String
  },
  data() {
    return {};
  },
  mounted() {
    let self = this;
    $(this.$refs.input)
      .datepicker({
        todayHighlight: true,
        autoclose: !0,

        pickerPosition: "top",
        format: self.format,
        templates: {}
      })
      .on("changeDate", function(e) {
        let newValue = moment(e.date).format(self.format.toLowerCase());
        self.$refs.input.value = newValue;
        self.$emit("input", newValue);
      });
  },
  methods: {},
  beforeDestroy: function() {}
};
</script>
