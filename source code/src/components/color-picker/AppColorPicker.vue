<template>
  <input type="text" id="wheel-demo" class="form-control minicolors-input" :value="value" data-control="wheel" />
</template>


<script>
/**
 * Color picker, sử dụng thư viện minicolors : https://labs.abeautifulsite.net/jquery-minicolors
 */
export default {
  name: "app-color-picker",
  props: {
    /**
     * @model Giá trị color kiểu hex dùng để binding (ví dụ: #ffddee)
     */
    value: {
      type: String
    }
  },
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
