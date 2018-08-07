<template>
   <div class="tree-demo">
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
    data: [Object, Array]
  },
  data() {
    return {
      inputValue: this.value
    };
  },
  methods: {},
  mounted() {
    console.log(this.$el);
    $(this.$el).jstree({
      core: {
        data: this.data,
        themes: {
          responsive: false
        }
      },
      // plugins: ["wholerow", "checkbox", "types"],
      plugins: ["contextmenu", "state", "types"],
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
};
</script>
