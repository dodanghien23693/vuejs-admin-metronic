<template>
<div id="app" class="m-grid m-grid--hor m-grid--root m-page">
    <app-header></app-header>
    <div class="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body">

      <button class="m-aside-left-close  m-aside-left-close--skin-dark " id="m_aside_left_close_btn">
        <i class="fa fa-close"></i>
      </button>

      <left-sidebar></left-sidebar>
      <div class="m-grid__item m-grid__item--fluid m-wrapper" style="margin:0">
          <router-view id="page-view-container">

          </router-view>
      </div>
    </div>
</div>
</template>

<script>
import AppHeader from "@/pages/components/AppHeader.vue";
import LeftSidebar from "@/pages/components/LeftSidebar.vue";

export default {
  name: "admin-page",
  data: function() {
      return {}
  },
  components: {
    AppHeader,
    LeftSidebar
  },
  mounted(){
    
  },
  methods: {}

};
</script>

<style lang="scss" scoped>
#page-view-container{
  padding: 20px;
  height: calc(100vh - 70px);
  overflow: auto;
  margin:0;
}
</style>
