<template>
    <input type="text" class="form-control" id="m_datetimepicker_2_modal" v-model="time" placeholder="Select date &amp; time">
</template>

<script>
export default {
	name: "app-datetime-picker",
	props: ["date"],
	data() {
		return {
			time: this.date
		};
	},
	created: function() {},
	mounted() {
		$(this.$el).datetimepicker({
			todayHighlight: !0,
			autoclose: !0,
			pickerPosition: "bottom-left",
			format: "dd/mm/yyyy hh:ii"
		});
	}
};
</script>
