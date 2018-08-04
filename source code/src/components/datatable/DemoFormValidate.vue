<template>
	<div class="m-content">
		<div class="m-portlet">
			<div class="m-portlet__head">
				<div class="m-portlet__head-caption">
					<div class="m-portlet__head-title">
						<h3 class="m-portlet__head-text">
							Default Form Validation
						</h3>
					</div>
				</div>
			</div>
			<!--begin::Form-->
			<form class="m-form m-form--fit m-form--label-align-right" id="m_form_1">
				<div class="m-portlet__body">
					<div class="form-group m-form__group row">
						<label class="col-form-label col-lg-3 col-sm-12">Email *</label>
						<div class="col-lg-4 col-md-9 col-sm-12">
							<input type="text" class="form-control m-input" name="email" placeholder="Enter your email" data-toggle="m-tooltip" title="Tooltip description">
						</div>
					</div>
					<div class="form-group m-form__group row">
						<label class="col-form-label col-lg-3 col-sm-12">phone *</label>
						<div class="col-lg-4 col-md-9 col-sm-12">
							<input type="text" class="form-control m-input" name="phone" placeholder="Enter your phone" data-toggle="m-tooltip" title="Tooltip description">
						</div>
					</div>
				</div>
				<div class="m-portlet__foot m-portlet__foot--fit">
					<div class="m-form__actions m-form__actions">
						<div class="row">
							<div class="col-lg-9 ml-lg-auto">
								<button  type="submit" class="btn btn-success">Validate</button>
								<button type="reset" class="btn btn-secondary">Cancel</button>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>
<script>
import $ from "jquery";
import validate from "jquery-validation";

export default {
  name: "demo-form-validate",
  methods: {
    validate: function(event) {
      event.preventdefault();
    }
  },
  mounted() {
    $("#m_form_1").validate({
      rules: {
        email: { required: true, email: true, minlength: 10 },
        phone: { required: true, minlength: 10, number: true }
      },
      messages: {
        email: {
          required: "Ban chua nhap email",
          email: "Hãy nhập email hợp lệ"
        },
        phone: {
          required: "Ban chua nhap phone",
          minlength: "do dai hon 10",
          number: "nhap so"
        }
      },
      invalidHandler: function(e, r) {},
      submitHandler: function(e) {}
    });
  }
};
</script>
<style lang="scss">
.error {
  color: red;
}
</style>
