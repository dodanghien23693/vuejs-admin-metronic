<template>
<div>
<form class="m-form" v-on:submit.prevent="submitForm">
    <slot></slot>
</form>
 </div>
</template>

<script>
/**
 * #### app-form dùng để quản lý form: quản lý hàm xử lý khi submit, thực hiện validate dữ liệu
 */
export default {
	name: "app-form",
	//Inject $validator để app-form truy cập được các v-validate của các component con
	inject: ["$validator"],
	props: {
		/**
		 * Hàm thực hiện khi submit form
		 */
		formSubmit: {
			type: Function
		}
	},
	methods: {
		submitForm() {
			let self = this;
			this.$validator.validateAll().then(result => {
				//Nếu thành công thì mới gọi hàm
				if (result) {
					this.formSubmit();
				} else {
					self.$swal("Dữ liệu nhập vào form không hợp lệ!", "", "error");
					self.$toastr.error("Dữ liệu nhập vào không hợp lệ");
				}
			});
		}
	},
	mounted() {}
};
</script>
