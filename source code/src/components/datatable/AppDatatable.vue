<template>

<table ref="input"></table>
  <!-- <div class="m-portlet m-portlet--mobile">
    <div class="m-portlet__body">
        <div class="m-form m-form--label-align-right m--margin-top-20 m--margin-bottom-30">
          <div class="row align-items-center">
            <div class="col-xl-12 order-2 order-xl-1">
              <div class="form-group m-form__group row align-items-center">
                <div class="col-md-3">
                  <div class="m-input-icon m-input-icon--left">
                    <input type="text" class="form-control m-input" placeholder="Search..." id="generalSearch">
                    <span class="m-input-icon__icon m-input-icon__icon--left">
                      <span>
                        <i class="la la-search"></i>
                      </span>
                    </span>
                  </div>
                </div>
                <div class="col-md-9">
                  <button class="btn btn-secondary" type="button" id="m_datatable_destroy">Destroy</button>
                  <button class="btn btn-secondary" type="button" id="m_datatable_init">Initialize</button>
                  <button class="btn btn-secondary" type="button" id="m_datatable_reload">Reload data</button>
                  <button class="btn btn-secondary" type="button" id="m_datatable_get">Get ShipCity</button>
                  <span id="datatable_value"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="m-form m-form--label-align-right m--margin-top-20 m--margin-bottom-30">
          <div class="row align-items-center">
            <div class="col-xl-12 order-2 order-xl-1">
              <div class="form-group m-form__group row align-items-center">
                <div class="col-xl-3">
                <input type="text" class="form-control m-input" placeholder="Search city..." id="SearchCity">
              </div>
              <div class="col-xl-3">
                <input type="text" class="form-control m-input" placeholder="Search Currency" id="SearchCurrency">
              </div>
              <div class="col-xl-3">
                <input type="text" class="form-control m-input" placeholder="Search Ship Date" id="SearchShipDate">
              </div>
              <div class="col-xl-3">
                <input type="text" class="form-control m-input" placeholder="Search Country" id="SearchCountry">
              </div>
              </div>
            </div>
          </div>
        </div>
        <div class="m-form m-form--label-align-right m--margin-top-10 m--margin-bottom-30">
          <div class="row">
            <div class="col-lg-12">
              <button class="btn btn-secondary" type="button" id="m_datatable_check_all">Select all rows</button>
              <button class="btn btn-secondary" type="button" id="m_datatable_uncheck_all">Unselect all rows</button>
              <button class="btn btn-secondary" type="button" id="m_datatable_hide_column">Hide currency</button>
              <button class="btn btn-secondary" type="button" id="m_datatable_show_column">Show currency</button>
              <button class="btn btn-secondary" type="button" id="m_datatable_remove_row">Remove active row</button>
              <button class="btn btn-secondary" type="button" id="m_datatable_sort_asc">Sort ShipCity [asc]</button>
              <button class="btn btn-secondary" type="button" id="m_datatable_sort_desc">Sort ShipCity [desc]</button>
            </div>
          </div>
        </div>
      <div class="m_datatable" id="api_methods"></div>
    </div>
  </div> -->

</template>

<script>
export default {
	name: "app-datatable",
	props: {
		/**
		 * Cấu hình checkbox cho datatable
		 */
		checkbox: {
			type: Boolean
		},

		/**
		 * Hàm sử dụng để lấy dữ liệu cho datatable
		 */
		ajax: {
			type: Function
		},

		/**
		 * Object cấu hình cho datatable
		 */
		settings: {
			type: Object
		}
	},
	mounted() {
		let defaultConfig = {
			layout: {
				theme: "default",
				class: "",
				scroll: !0,
				height: 550,
				footer: !1
			},
			sortable: !0,
			pagination: !0
		};

		var config = Object.assign({}, defaultConfig, this.settings);
		let extensions = {};
		if (this.checkbox) {
			extensions.checkbox = {
				vars: {
					selectedAllRows: "selectedAllRows",
					requestIds: "requestIds",
					rowIds: "meta.rowIds"
				}
			};
		}

		config.extensions = extensions;

		// config.data = data;

		let table = $(this.$refs.input).mDatatable(config);

		// $("#m_datatable_destroy").on("click", function() {
		// 	$(".m_datatable").mDatatable("destroy");
		// }),
		// 	$("#m_datatable_init").on("click", function() {
		// 		table = $(".m_datatable").mDatatable(t);
		// 	}),
		// 	$("#m_datatable_reload").on("click", function() {
		// 		$(".m_datatable").mDatatable("reload");
		// 	}),
		// 	$("#m_datatable_sort_asc").on("click", function() {
		// 		table.sort("ShipCity", "asc");
		// 	}),
		// 	$("#m_datatable_sort_desc").on("click", function() {
		// 		table.sort("ShipCity", "desc");
		// 	}),
		// 	$("#m_datatable_get").on("click", function() {
		// 		if (
		// 			(table.rows(".m-datatable__row--active"), table.nodes().length > 0)
		// 		) {
		// 			var t = table
		// 				.columns("Longitude")
		// 				.nodes()
		// 				.text();
		// 			$("#datatable_value").html(t);
		// 		}
		// 	}),
		// 	$("#m_datatable_check").on("click", function() {
		// 		var t = $("#m_datatable_check_input").val();
		// 		table.setActive(t);
		// 	}),
		// 	$("#m_datatable_check_all").on("click", function() {
		// 		$(".m_datatable").mDatatable("setActiveAll", !0);
		// 	}),
		// 	$("#m_datatable_uncheck_all").on("click", function() {
		// 		$(".m_datatable").mDatatable("setActiveAll", !1);
		// 	}),
		// 	$("#m_datatable_hide_column").on("click", function() {
		// 		table.columns("Currency").visible(!1);
		// 	}),
		// 	$("#m_datatable_show_column").on("click", function() {
		// 		table.columns("Currency").visible(!0);
		// 	}),
		// 	$("#m_datatable_remove_row").on("click", function() {
		// 		table.rows(".m-datatable__row--active").remove();
		// 	}),
		// 	// search
		// 	$("#SearchCurrency").on("keyup", function() {
		// 		table.search($(this).val(), "Currency");
		// 	}),
		// 	$("#SearchShipDate").on("keyup", function() {
		// 		table.search($(this).val(), "ShipDate");
		// 	}),
		// 	$("#SearchShipDate").on("keyup", function() {
		// 		table.search($(this).val(), "ShipDate");
		// 	}),
		// 	$("#SearchCity").on("keyup", function() {
		// 		table.search($(this).val(), "ShipCity");
		// 	});
	}
};
</script>
