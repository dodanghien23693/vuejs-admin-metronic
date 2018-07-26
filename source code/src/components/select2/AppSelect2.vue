<template>
   <select> 
    <option v-for="opt in options" :key="opt" :value="opt.value">{{opt.title}}</option>
  </select>
</template>

<script>
export default {
	name: "app-select2",
	props: ["options", "value", "placeholder", "multiple"],
	mounted() {
		var vm = this;
		$(this.$el)
			.select2({
				placeholder: this.placeholder,
				multiple: this.multiple
			})
			.val(this.value)
			.trigger("change")
			.on("change", function() {
				// emit event on change.
				vm.$emit("input", this.value);
			});
	},
	watch: {
		value: function(value) {
			// update value
			$(this.$el)
				.val(value)
				.trigger("change");
		},
		options: function(options) {
			// update options
			$(this.$el)
				.empty()
				.select2({ data: options });
		}
	},
	destroyed: function() {
		$(this.$el)
			.off()
			.select2("destroy");
	}
};
</script>
