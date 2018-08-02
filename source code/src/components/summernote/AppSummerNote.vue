<template>
<div>
  <textarea class="summernote" 
    ref="input"
    :value="value"
  >
  </textarea>
  <span class="form-control-feedback" v-show="error.has(name)">{{error.first(name)}}</span>
</div>
</template>

<script>
/**
 * App Summernote, sử dụng thư viện Summernote: https://summernote.org/getting-started/
 */
export default {
  name: "app-summernote",
  props: ["value", "config"],
  props: {
    /**
     * @description Giá trị value kiểu String
     */

    value: {
      type: String
    },
    /**
     * @description Giá trị Object (ví dụ: config: { height: 300, focus: true})
     */
    config: {
      type: Object
    },

    name: String,
    error: Object
  },
  // $_veeValidate: {
  // 	// value() {
  // 	// 	return this.innerValue;
  // 	// }
  // },
  data() {},
  mounted() {
    let config = {
      height: 200
    };
    if (this.config) {
      config = this.config;
    }
    var editor = $(this.$el).find("textarea");

    editor.summernote(config);

    var self = this;
    editor.on("summernote.change", function(we, contents, $editable) {
      self.$validator.validate().then(result => {
        if (result) {
          self.$emit("input", contents);
        }
      });
    });
  }
};
</script>
