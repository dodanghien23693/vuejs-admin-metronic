<script>
import template from "./CreateUserPage.html";
import AppSelect2 from "@/components/select2/AppSelect2.vue";
import AppTypeAhead from "@/components/app-type-ahead/AppTypeAhead.vue";
import AppForm from "@/components/app-form/AppForm";
import AppJsTree from "@/components/app-js-tree/AppJsTree.vue";
export default {
  template: template,
  name: "create-user-page",
  components: {
    AppSelect2,
    AppTypeAhead,
    AppForm,
    AppJsTree
  },
  data() {
    return {
      user: {
        email: "",
        phone: "",
        phonenumber: "",
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
      },
      plugins: ["wholerow", "checkbox", "types", "dnd"],
      jstree_data: [
        { text: "node", children: ["Child node 1", "Child node 2"] },
        { text: "Root node", children: ["Child node 1", "Child node 2"] },
        {
          text: "Root node2",
          children: [
            {
              text: "Root node2",
              children: ["Child node 12", "Child node 22"]
            }
          ]
        }
      ]
    };
  },

  methods: {
    treeHasChange() {},
    addUser() {
      console.log(this.user);
      console.log(this.country);
      this.$swal("Dữ liệu nhập vào form không hợp lệ!", "", "error");
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
