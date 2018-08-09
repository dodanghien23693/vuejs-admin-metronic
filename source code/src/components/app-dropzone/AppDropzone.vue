<template>
<div class="col-sm-4">
  <div class="m-dropzone dropzone" id="my-dropzone" action="#" ref="input">
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
    /**
     * @Model
     */
    value: {
      type: [Array, Object]
    },

    /**
     * Cấu hình setting cho dropzone, chi tiết xem tại: https://www.dropzonejs.com/#configuration-options
     */
    options: {
      type: Object
    },
    /**
     * Cấu hình cho phép dropzone tự động upload ảnh ngay khi được thêm vào
     */
    autoUpload: {
      type: Boolean
    },

    /**
     * Giới hạn số file tối đa
     */
    maxFiles: Number
  },
  data() {
    return {
      files: [],
      myDropzone: {}
    };
  },
  methods: {},
  mounted() {
    let data = new Array();
    let self = this;

    let defaultConfig = {
      url: "/uploadImage",
      // autoQueue: false,
      paramName: "file",
      maxFilesize: 1,
      acceptedFiles: "image/*",
      addRemoveLinks: true,

      dictDefaultMessage: "Default message",
      dictFileTooBig: "File lớn quá",
      dictResponseError: "Lỗi server",
      dictRemoveFile: "<button class='btn btn-sm btn-danger'>Xóa</button>",
      dictRemoveFileConfirmation: "Bạn có chắc muốn xóa file này?",
      dictMaxFilesExceeded: "Vượt quá số lượng file tối đa cho phép"

      // previewTemplate:""  //Cấu hình template cho image preview
    };

    let config = Object.assign({}, defaultConfig, this.options);

    //Cấu hình cho phép bật tắt chế độ tự động upload ảnh (true: tự động, false: tắt chế độ tự động)
    config.autoProcessQueue = this.autoUpload;

    //Giới hạn số lượng file tối đa
    if (this.maxFiles) {
      config.maxFiles = this.maxFiles;
    }

    //Khởi tạo dropzone
    let myDropzone = new Dropzone(this.$refs.input, config);
    this.myDropzone = myDropzone;
    this.files = myDropzone.files;

    myDropzone.on("addedfile", function(file, dataUrl) {
      /* Maybe display some more file information on your page */
      console.log(myDropzone.files);
      self.$emit("input", myDropzone.files);
    });

    /**
     * Xử lý các sự kiện cho dropzone
     */

    //Khi thực hiện xóa file
    myDropzone.on("removedfile", function(file) {
      self.$emit("input", myDropzone.files);
    });

    myDropzone.on("maxfilesexceeded", file => {
      //Khi số lượng file vượt quá số lượng giới hạn cho phép: Hiển thị thông báo lỗi cho người dùng biết nếu cần
    });

    myDropzone.on("error", err => {
      debugger;
      //Khi khi upload file lên server có lỗi
    });

    // myDropzone.on("thumbnail", function(file, dataUrl) {
    // 	let dataUpload = new Object();
    // 	dataUpload.dataURL = dataUrl;
    // 	dataUpload.filename = file.name;
    // 	dataUpload.uuid = file.upload.uuid;
    // 	data.push(dataUpload);
    // 	self.$emit("input", data);
    // });
  },
  beforeDestroy() {
    this.myDropzone.destroy();
  }
};
</script>
<style lang="scss" >
.dz-progress {
  display: none;
}
</style>
