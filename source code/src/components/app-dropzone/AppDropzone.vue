<template>
    <div class="form-group m-form__group row">
      <label class="col-form-label col-lg-3 col-sm-12">Single File Upload</label>
      <div class="col-lg-4 col-md-9 col-sm-12">
        <div id="dropzone">
          <div class="m-dropzone dropzone m-dropzone--primary" action="/upload" id="m-dropzone-two">
            <div class="m-dropzone__msg dz-message needsclick">
              <h3 class="m-dropzone__msg-title">Drop files here or click to upload.</h3>
              <span class="m-dropzone__msg-desc">Upload up to 10 files</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: "app-dropzone",
  mounted() {
    var DropzoneDemo = {
      init: function() {
        debugger;
        Dropzone.options.mDropzoneTwo = {
          paramName: "file",
          maxFiles: 1,
          maxFilesize: 5,
          addRemoveLinks: !0,
          accept: function(e, o) {
            "justinbieber.jpg" == e.name ? console.log("ok") : o();
          }
        };
      }
    };
    DropzoneDemo.init();
  }
};
</script>
