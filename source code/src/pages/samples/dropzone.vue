<template>
<div>
    <app-dropzone v-model="files" :config="dropzoneOptions"></app-dropzone>
    data dropzone: {{files}}
</div>
</template>
<script>
import AppDropzone from "@/components/app-dropzone/AppDropzone.vue";

export default {
  name: "app-dropzone-vue",
  components: {
    AppDropzone
  },
  data: function() {
    return {
      dropzoneOptions: {
        url: "/app-dropzone",
        thumbnailWidth: 150,
        maxFiles: 1,
        maxFilesize: 0.5
      },
      files: []
    };
  }
};
</script>
