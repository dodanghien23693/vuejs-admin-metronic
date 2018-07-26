<script>
import template from "./CreateUserPage.html";
import AppSelect2 from "@/components/select2/AppSelect2.vue";
export default {
	template: template,
	name: "create-user-page",
	components: {
		AppSelect2
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
				{ title: "option1", value: "1", selected: false },
				{ title: "option2", value: "2", selected: false },
				{ title: "option3", value: "3", selected: false }
			],
			selected: 2
		};
	},

	methods: {
		addUser() {
			console.log(this.user);
		},
		doLogin() {
			//gọi request thông qua axios
			this.$http.post("").then(() => {});
		}
	},
	mounted() {}
};
</script>
