<script>
import template from "./CreateUserPage.html";
import AppSelect2 from "@/components/select2/AppSelect2.vue";
import AppTypeAhead from "@/components/app-type-ahead/AppTypeAhead.vue";
export default {
  template: template,
  name: "create-user-page",
  components: {
    AppSelect2,
    AppTypeAhead
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
        { title: "option1", value: "1" },
        { title: "option2", value: "2" },
        { title: "option3", value: "3" }
      ],
      selected: 2,
      selected_multi: [2, 3],
      options_multi: [
        { title: "multi_option1", value: "1" },
        { title: "multi_option2", value: "2" },
        { title: "multi_option3", value: "3" }
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
      country: ""
    };
  },

  methods: {
    addUser() {
      console.log(this.user);
      console.log(this.country);
      // this.options.push({ title: "option4", value: "4" });
    },
    doLogin() {
      //gọi request thông qua axios
      this.$http.post("").then(() => {});
    }
  },
  mounted() {}
};
</script>
