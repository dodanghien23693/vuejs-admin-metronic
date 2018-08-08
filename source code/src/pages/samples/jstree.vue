
<template>
    <div>
        <h3>Jstree</h3>
        Show checkbox <input type="checkbox" checked v-model="showCheckbox">
        <v-jstree :show-checkbox=showCheckbox multiple draggable :data="data1"
        collapse
        @item-click="itemClick"
        @item-drag-start="dragStart"
        @item-drag-end="dragEnd"
        @item-toggle="itemToggle"
        >
        <template scope="_">
            <div style="display: inherit; width: 200px" @click.ctrl="customItemClickWithCtrl">
            <!-- <i :class="_.vm.themeIconClasses" role="presentation" v-if="!_.model.loading"></i> -->
            {{_.model.text}}
            <button style="border: 0px; background-color: transparent; cursor: pointer;" @click="customItemClick(_.vm, _.model, $event)"><i class="fa fa-remove"></i></button>
            </div>
        </template>
        </v-jstree>
    </div>
</template>

<script>
import VJstree from "vue-jstree";

export default {
  name: "sample-jstree",
  components: {
    VJstree
  },
  methods: {
    itemClick(node, item, e) {},
    dragStart(node, item, e) {},
    dragEnd(node, item, e) {},
    itemToggle(node, item, e) {
      debugger;
    }
  },
  data() {
    return {
      showCheckbox: true,
      data1: [
        {
          text: "Same but with checkboxes",
          children: [
            {
              text: "initially selected",
              selected: true
            },
            {
              text: "custom icon"
            },
            {
              text: "initially open",
              opened: true,
              children: [
                {
                  text: "Another node"
                }
              ]
            },
            {
              text: "custom icon"
            },
            {
              text: "disabled node",
              disabled: true
            }
          ]
        },
        {
          text: "Same but with checkboxes",
          opened: true,
          children: [
            {
              text: "initially selected",
              selected: true
            },
            {
              text: "custom icon",
              icon: "fa fa-warning icon-state-danger"
            },
            {
              text: "initially open",
              icon: "fa fa-folder icon-state-default",
              opened: true,
              children: [
                {
                  text: "Another node"
                }
              ]
            },
            {
              text: "custom icon",
              icon: "fa fa-warning icon-state-warning"
            },
            {
              text: "disabled node",
              icon: "fa fa-check icon-state-success",
              disabled: true
            }
          ]
        },
        {
          text: "And wholerow selection"
        }
      ]
    };
  }
};
</script>
