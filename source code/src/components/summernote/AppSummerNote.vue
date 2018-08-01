<template>
  <textarea class="summernote" name="editordata"></textarea>
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
      type: Object,
      default: {}
    }
  },
  mounted() {
    let config = {
      height: 200
    };
    if (this.config) {
      config = this.config;
    }
    $(this.$el).summernote(config);
    // evevnt change
    var self = this;
    $(this.$el).on("summernote.change", function(we, contents, $editable) {
      self.$emit("input", contents);
    });
    // set data for summernote
    $(this.$el).summernote("code", this.value);
  }
};
</script>
