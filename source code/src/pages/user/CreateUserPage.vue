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
				{ title: "option1", value: "1" },
				{ title: "option2", value: "2" },
				{ title: "option3", value: "3" }
			],
			selected: 2
		};
	},

	methods: {
		addUser() {
			console.log(this.user);
			this.options.push({ title: "option4", value: "4" });
		},
		doLogin() {
			//gọi request thông qua axios
			this.$http.post("").then(() => {});
		}
	},
	mounted() {}
};
</script>
