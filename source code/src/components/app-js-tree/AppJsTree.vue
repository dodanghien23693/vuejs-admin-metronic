<template>
   <div class="tree-demo" id="tree">
   </div>
</template>
<script>
/**
 * app-input sử dụng cho các component input kiểu : text, email, number
 */
export default {
  name: "app-js-tree",
  props: {
    /**
     * @Model
     */
    value: [String, Number],
    plugins: [Array],
    data: [Object, Array]
  },
  data() {
    return {
      inputValue: this.value
    };
  },
  methods: {
    innit() {
      var self = this;
      $(this.$el)
        .on("changed.jstree", function(e, data) {
          self.$emit("change", data);
        })
        .jstree({
          core: {
            data: this.data,
            themes: {
              responsive: false
            }
          },
          plugins: this.plugins,
          //plugins: ["contextmenu", "state", "types"],
          types: {
            default: {
              icon: "fa fa-folder m--font-warning"
            },
            file: {
              icon: "fa fa-file  m--font-warning"
            }
          }
        });
    }
  },
  mounted() {
    this.innit();
  },
  watch: {
    value: function(val) {
      this.innit();
    }
  }
};
</script>
