<template>
  <textarea class="summernote" name="editordata"></textarea>
</template>

<script>
export default {
  name: "app-summernote",
  props: ["value", "config"],
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
