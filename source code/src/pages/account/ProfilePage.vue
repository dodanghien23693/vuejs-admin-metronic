<script>
import template from "./ProfilePage.html";
import AppDatePicker from "../../components/date-picker/AppDatePicker";
import AppDateTimePicker from "../../components/datetime-picker/AppDateTimePicker";
import TimePicker from "../../components/time-picker/AppTimePicker";
import AppSummernote from "../../components/summernote/AppSummerNote";
import AppColorPicker from "../../components/color-picker/AppColorPicker";
import AppDatatable from "../../components/datatable/AppDatatable";
import AppForm from "@/components/app-form/AppForm";
import AppInput from "@/components/app-input/AppInput";
import AppDropzone from "@/components/app-dropzone/AppDropzone";

export default {
  name: "profile",
  inject: ["$validator"],
  template: template,
  data: function() {
    return {
      userInfor: {
        image:
          "https://vietnammoi.vn/stores/news_dataimages/htt/032018/21/10/4006_ef50189c12294e6298121aa3a2b58d91.jpg",
        name: "n",
        email: "daohai3031996@gmail.com",
        contact: "0943611060",
        isSupperAdmin: true,
        dateTime: "2018/07/26 10:30",
        sex: "girl",
        time: "10:20:91",
        birthday: "01/08/2018",
        note: "dao hai la nguoi rat dep trai",
        hex: "#61485c"
      },
      updateImage: { dataURL: "a" }
    };
  },
  components: {
    AppDatePicker,
    AppDateTimePicker,
    TimePicker,
    AppSummernote,
    AppColorPicker,
    AppDatatable,
    AppForm,
    AppInput,
    AppDropzone
  },
  created: function() {},
  methods: {
    submit(e) {
      this.$swal("Cập nhật thành công", "Tiêu đề con", "OK");
    }
  }
};
</script>
