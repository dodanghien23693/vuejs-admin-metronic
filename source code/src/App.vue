<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "mvcorp-app",
  mounted() {
    // If the user is authenticated,
    // fetch the data from the API

    // if (this.$store.state.auth.authenticated) {
    //   if (window.location.pathname == "/login") {
    //     window.location = "/app/task/list";
    //   }
      
    //   this.$store.dispatch("account/find");

    // } else {
    //   if (window.location.pathname != "/login") {
    //     window.location = "/login";
    //   }
    // }
  },
}
</script>



