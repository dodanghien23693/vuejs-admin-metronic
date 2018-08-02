<template>
  <textarea
    ref="input"
    :value="value"
  >
  </textarea>
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

    name: String
  },
  data() {},
  mounted() {
    let config = {
      height: 200
    };
    if (this.config) {
      config = this.config;
    }
    var editor = $(this.$refs.input);

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
