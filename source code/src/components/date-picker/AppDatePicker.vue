<template>
  <input type="text" class="form-control" ref="input" :value="this.value" />
</template>

<script>
/**
 * DatePicker Component, sử dụng thư viện bootstrap-datepicker (http://bootstrap-datepicker.readthedocs.io)
 */
export default {
  name: "app-date-picker",
  props: {
    /**
     * @model
     */
    value: {
      type: String
    },
    /**
     *@description Chuỗi định dạng ngày vd: "dd-mm-yyy", "mm/dd/yyyy"
     */
    format: {
      type: String
    }
  },
  mounted() {
    this.$emit("input", moment(this.value).format(this.format.toUpperCase()));
    this.$refs.input.value = moment(this.value).format(
      this.format.toUpperCase()
    );
    let self = this;
    $(this.$el)
      .datepicker({
        todayHighlight: true,
        orientation: "bottom left",
        format: self.format,
        templates: {
          leftArrow: '<i class="la la-angle-left"></i>',
          rightArrow: '<i class="la la-angle-right"></i>'
        }
      })

      .on("changeDate", function(e) {
        /**
         * Sự kiện phát ra khi datetime được ẩn đi
         *
         * @event input
         * @type {string}
         */
        self.$emit("input", moment(e.date).format(self.format.toUpperCase()));
      });
  },

  beforeDestroy: function() {
    $(this.$el)
      .datepicker("hide")
      .datepicker("destroy");
  }
};
</script>
