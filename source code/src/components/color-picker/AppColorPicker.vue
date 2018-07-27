<template>
  <input type="text" id="wheel-demo" class="form-control minicolors-input" :value="value" data-control="wheel" />
</template>

<script>
export default {
  name: "app-color-picker",
  props: ["value"],
  mounted() {
    let self = this;
    $(this.$el).minicolors({
      animationSpeed: 100,
      animationEasing: "swing",
      change: null,
      changeDelay: 0,
      control: "hue",
      defaultValue: "",
      hide: null,
      hideSpeed: 100,
      inline: false,
      letterCase: "lowercase",
      opacity: false,
      position: "default",
      show: null,
      showSpeed: 100,
      swatchPosition: "left",
      textfield: true,
      theme: "default",
      change: function(hex, opacity) {
        self.$emit("input", hex);
      }
    });
  }
};
</script>
