
<script>
import template from "./AppDatePicker.html";
export default {
	name: "app-date-picker",
	props: ["date"],
	data: {
		time: ""
	},
	template: template,
	created: function() {
		this.time = this.date;
	},
	mounted() {
		mLayout.initAside();
	}
};
</script>
