<script>
import template from "./CreateUserPage.html";
import AppSelect2 from "@/components/select2/AppSelect2.vue";
import AppTypeAhead from "@/components/app-type-ahead/AppTypeAhead.vue";
import fromValidation from "@/components/from-validation/formValidation.vue";
import AppForm from "@/components/app-form/AppForm";
export default {
  template: template,
  name: "create-user-page",
  components: {
    AppSelect2,
    AppTypeAhead,
    fromValidation,
    AppForm
  },
  data() {
    return {
      user: {
        email: "",
        phone: "",
        name: "",
        user_name: "",
        address: ""
      },
      options: [
        { title: "Đại học", value: "1" },
        { title: "Tiến sỹ", value: "2" },
        { title: "Giáo sư", value: "3" },
        { title: "Tiểu học", value: "4" },
        { title: "Mẫu giáo", value: "5" }
      ],
      selected: "",
      selected_multi: [],
      options_multi: [
        { title: "Tiếng việt", value: "1" },
        { title: "Tiếng Anh", value: "2" },
        { title: "Tiếng Hàn", value: "3" },
        { title: "Tiếng Trung", value: "4" }
      ],
      data_souce: [
        "Việt Nam ",
        "Viet nam",
        "Vit",
        "Viet tel",
        "Trung Quốc",
        "Lào",
        "Thái Lan",
        "Campuchia"
      ],
      country: "",
      rules: {
        email: {
          required: true,
          email: true,
          minlength: 10
        },
        name: {
          required: true
        }
      }
    };
  },

  methods: {
    addUser() {
      console.log(this.user);
      console.log(this.country);
    },
    doLogin() {
      //gọi request thông qua axios
      this.$http.post("").then(() => {});
    },
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          // eslint-disable-next-line
          alert("Form Submitted!");
          return;
        }
        console.log("Correct them errors!");
      });
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
</style>
