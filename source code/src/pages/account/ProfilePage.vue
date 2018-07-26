<script>
import template from "./ProfilePage.html";
import AppDatePicker from "../../components/date-picker/AppDatePicker";
import AppDateTimePicker from "../../components/datetime-picker/AppDateTimePicker";
import TimePicker from "../../components/time-picker/AppTimePicker";

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
				time: "10:20",
				birthday: "05/20/2017"
			}
		};
	},
	components: {
		AppDatePicker,
		AppDateTimePicker,
		TimePicker
	},
	created: function() {},
	methods: {
		Change: function() {
			console.log(this.userInfor);
		}
	}
};
</script>
