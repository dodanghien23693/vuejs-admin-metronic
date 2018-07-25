
<script>
import template from "./LeftSidebar.html";
export default {
  name: "left-sidebar",
  template: template,
  mounted() {
    mLayout.initAside();
  }
};
</script>

<style lang="scss" scoped>
#m_aside_left {
  height: calc(100vh - 70px);
}
.m-aside-menu .m-menu__nav {
  padding-top: 10px;
}
</style>
