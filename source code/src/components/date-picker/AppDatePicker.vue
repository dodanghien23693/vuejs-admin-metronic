<template>
<div> 
  <input type="text" class="form-control" 
    ref="input"
    :value="value"
    :name="name"
    v-validate="validate"
   />
    <span class="form-control-feedback" v-show="errors.has(name)">{{errors.first(name)}}</span>
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
    validate: {
      type: [Object, String]
    }
  },
  data() {
    return {
      inputValue: this.value
    };
  },
  mounted() {
    let self = this;
    $(this.$el)
      .find("input")
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

        self.$validator.validate().then(result => {
          if (result) {
            let newValue = moment(e.date).format(self.format.toUpperCase());
            self.$refs.input.value = newValue;
            self.$emit("input", newValue);
          }
        });
      });
  },

  beforeDestroy: function() {
    $(this.$el)
      .datepicker("hide")
      .datepicker("destroy");
  }
};
</script>
