

<script>
import template from "./AppHeader.html";

export default {
  name: "app-header",
  template: template,
  mounted() {
    mLayout.initHeader();
  }
};
</script>
