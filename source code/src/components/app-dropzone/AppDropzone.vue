<template>
<div class="m-portlet m-portlet--mobile">
    <div class="m-portlet__body">
      <div class="form-group m-form__group row">
        <label class="col-form-label col-lg-3 col-sm-12">Single File Upload</label>
        <div class="col-lg-4 col-md-9 col-sm-12">
          <div id="dropzone">
            <div class="m-dropzone dropzone m-dropzone--primary" ref="input" id="m-dropzone-two">
              <div class="m-dropzone__msg dz-message needsclick">
                <h3 class="m-dropzone__msg-title">Drop files here or click to upload.</h3>
                <span class="m-dropzone__msg-desc">Upload up to {{config}} files</span>
              </div>
            </div>
          </div>
        </div>
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
    config: {
      type: Number
    }
  },
  methods: {
    getData() {}
  },
  mounted() {
    let data = new Array();
    let self = this;
    Dropzone.autoDiscover = true;
    var myDropzone = new Dropzone(this.$refs.input, {
      url: "/app-dropzone",
      paramName: "file",
      maxFiles: 1,
      maxFilesize: 5,
      acceptedFiles: "image/*",
      addRemoveLinks: !0,
      accept: function(e, o) {}
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
  }
};
</script>
<style lang="scss" >
.dz-progress {
  display: none;
}
</style>
