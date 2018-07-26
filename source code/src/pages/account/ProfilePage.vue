<script>
import template from "./ProfilePage.html";
import AppDatePicker from "../../components/date-picker/AppDatePicker";
export default {
	name: "profile",
	template: template,
	data: function() {
		return {
			userInfor: {
				image:
					"https://vietnammoi.vn/stores/news_dataimages/htt/032018/21/10/4006_ef50189c12294e6298121aa3a2b58d91.jpg",
				name: "Đào Văn Hai",
				email: "daohai3031996@gmail.com",
				contact: "0943611060",
				isSupperAdmin: true,
				sex: "girl",
				birthday: "05/20/2017"
			}
		};
	},
	components: {
		AppDatePicker
	},
	created: function() {
		this.changeName();
	},
	methods: {
		changeName: function() {
			setTimeout(() => {
				this.userInfor.name = "dao van hai";
			}, 2000);
		},
		Change: function() {
			console.log(this.userInfor);
		}
	}
};
</script>
