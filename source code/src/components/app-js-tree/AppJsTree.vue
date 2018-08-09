<template>
<div>
  {{selected}}
  <div ref="input" class="tree-demo">
   </div>
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

    /**
     * Dữ liệu truyền vào cho jstree
     */
    data: [Object, Array],

    /**
     * Cấu hình checkbox cho jstrê
     */
    checkbox: Boolean,

    /**
     * Cho phép chọn nhiều nếu có checkbox
     */
    multiple: Boolean,

    /**
     * Cho phép kéo thả
     */
    dragable: Boolean,

    /**
     * Hiển thị màu cho toàn bộ hàng được chọn
     */
    wholerow: Boolean,

    /**
     * Lưu trạng thái của jstree
     */
    saveState: Boolean,

    /**
     * Context menu jstree
     */
    contextmenu: Boolean
  },
  data() {
    return {
      inputValue: this.value,
      selected: []
    };
  },
  methods: {
    init() {
      let plugins = [];
      if (this.checkbox) plugins.push("checkbox");
      if (this.dragable) plugins.push("dnd");
      if (this.wholerow) plugins.push("wholerow");
      if (this.state) plugins.push("state");
      if (this.contextmenu) plugins.push("contextmenu");

      var self = this;
      //Danh sách các cấu hình: https://www.jstree.com/api/#/?q=$.jstree.defaults
      //Danh sách các sự kiện: https://www.jstree.com/api/#/?q=.jstree%20Event
      //Danh sách các hàm của jstree: https://www.jstree.com/api/#/?q=(
      $(this.$refs.input)
        .on("dnd_scroll.vakata", (e, data) => {
          console.log("Dragged");
          debugger;
        })
        .on("dnd_start.vakata", (e, data) => {
          console.log("Dragged");
          debugger;
        })
        .on("dnd_stop.vakata", (e, data) => {
          console.log("Dropped");
          debugger;
        })
        .on("dnd_move.vakata", (e, data) => {
          console.log("Dropped");
          debugger;
        })
        .on("select_node.jstree", (node, selected, event) => {
          self.selected = selected.selected;
        })
        .on("deselect_node.jstree", function(e, data) {})
        .on("check_node.jstree", (node, selected, event) => {
          self.selected = selected.selected;
        })
        .on("uncheck_node.jstree", (node, selected, event) => {
          self.selected = selected.selected;
        })
        .on("delete_node.jstree", (node, parent) => {
          //Event khi thực hiện delete mặc định
          self.$emit("deleteNode", { node: node, parent: parent });
        })
        .on("create_node.jstree", (node, parent, position) => {
          //Event khi thực hiện create mặc định
          self.$emit("createNode", {
            node: node,
            parent: parent,
            position: position
          });
        })
        .on("rename_node.jstree", (node, text, old) => {
          //Event khi thực hiện rename mặc định
          self.$emit("renameNode", { node: node, text: text, old: old });
        })
        .jstree({
          checkbox: {
            cascade: "down", //Chọn thư mục cha thư mục con cũng sẽ được selected
            three_state: false
            // tie_selection: false,
            // whole_node: false
          },
          expand_selected_onload: true,
          dnd: {
            always_copy: true,
            drag_selection: true
          },
          core: {
            data: this.data,
            multiple: this.multiple,
            check_callback: function(
              operation,
              node,
              node_parent,
              node_position,
              more
            ) {
              // operation can be 'create_node', 'rename_node', 'delete_node', 'move_node', 'copy_node' or 'edit'
              // in case of 'rename_node' node_position is filled with the new node name
              return true;
              return operation === "rename_node" ? true : false;
            },
            themes: {
              responsive: false
            }
          },
          plugins: plugins,
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
    this.init();
  },
  watch: {
    value: function(val) {
      $(this.$refs.input).jstree(true).settings.core.data = val;
      $(this.$refs.input)
        .jstree(true)
        .redraw(true);
    }
  },
  beforeDestroy() {
    $(this.$refs.input)
      .jstree(true)
      .destroy();
  }
};
</script>
