<template>
<div> 
  <input type="text" class="form-control" 
    ref="input"
    :value="value"
   />
    <span class="form-control-feedback" v-show="error.has(name)">{{error.first(name)}}</span>
  </div>
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
    },
    name: String,
    error: Object
  },
  // $_veeValidate: {
  // 	value() {
  // 		return this.$refs.input.value;
  // 	}
  // },
  data() {
    return {};
  },
  mounted() {
    // this.$emit("input", moment(this.value).format(this.format.toUpperCase()));
    // this.$refs.input.value = moment(this.value).format(
    // 	this.format.toUpperCase()
    // );

    let self = this;
    $(this.$refs.input)
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

        let newValue = moment(e.date).format(self.format.toUpperCase());
        self.$refs.input.value = newValue;
        self.$emit("input", newValue);
      });
  },

  beforeDestroy: function() {
    $(this.$refs.input)
      .datepicker("hide")
      .datepicker("destroy");
  }
};
</script>
