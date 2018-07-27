<template>
  <input type="text" class="form-control" id="m_datepicker_1_modal" 
  ref="input" :value="this.value"  placeholder="Select date" />
</template>

<script>
export default {
  name: "app-date-picker",
  props: ["value", "type"],
  mounted() {
    this.$emit("input", moment(this.value).format(this.type.toUpperCase()));
    this.$refs.input.value = moment(this.value).format(this.type.toUpperCase());
    let self = this;
    $(this.$el)
      .datepicker({
        todayHighlight: true,
        orientation: "bottom left",
        format: self.type,
        templates: {
          leftArrow: '<i class="la la-angle-left"></i>',
          rightArrow: '<i class="la la-angle-right"></i>'
        }
      })

      .on("hide", function(e) {
        self.$emit("input", moment(e.date).format(self.type.toUpperCase()));
      });
  },

  beforeDestroy: function() {
    $(this.$el)
      .datepicker("hide")
      .datepicker("destroy");
  }
};
</script>
