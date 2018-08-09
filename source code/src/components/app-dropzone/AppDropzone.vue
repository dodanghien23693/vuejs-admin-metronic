<template>
<div class="col-sm-4">
  <div class="m-dropzone dropzone" action="inc/api/dropzone/upload.php" ref="input">
    <div class="m-dropzone__msg dz-message needsclick">
      <h3 class="m-dropzone__msg-title">Drop files here or click to upload.</h3>
      <span class="m-dropzone__msg-desc">This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.</span>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  name: "app-dropzone",
  props: {
    value: {
      type: [Array, Object]
    },
    options: {
      type: Object
    }
  },
  methods: {
    getData() {}
  },
  mounted() {
    let data = new Array();
    let self = this;

    Dropzone.autoDiscover = false;

    var myDropzone = new Dropzone(this.$refs.input, {
      url: "/app-dropzone",
      paramName: "file",
      maxFiles: 1,
      maxFilesize: 5,
      acceptedFiles: "image/*",
      // addRemoveLinks: !0,
      accept: function(e, o) {}
    });

    myDropzone.options.maxFiles = 1;

    myDropzone.on("addedfile", function(file, dataUrl) {
      /* Maybe display some more file information on your page */
    });

    myDropzone.on("removedfile", function(file) {});

    myDropzone.on("maxfilesexceeded", function(file) {
      debugger;
    });
    myDropzone.on("error", err => {
      debugger;
    });

    myDropzone.on("thumbnail", function(file, dataUrl) {
      let dataUpload = new Object();
      dataUpload.dataURL = dataUrl;
      dataUpload.filename = file.name;
      dataUpload.uuid = file.upload.uuid;
      data.push(dataUpload);
      self.$emit("input", data);
    });

    myDropzone.on("removedfile", function(file) {
      let name = file.name;
      for (let i = 0; i < data.length; i++) {
        if (name == data[i].filename) {
          data.splice(i, 1);
          self.$emit("input", data);
        }
      }
    });

    myDropzone.on("maxfilesreached", file => {
      debugger;
    });
  }
};
</script>
<style lang="scss" >
.dz-progress {
  display: none;
}
</style>
