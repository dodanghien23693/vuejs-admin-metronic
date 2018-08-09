<template>
  <div class="m-portlet m-portlet--mobile">
    <div class="m-portlet__body">
        <!--begin: Search Form -->
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
        <!--end: Search Form -->
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
        <!--begin: Search Form -->
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
      <!--end: Search Form -->

      <!--begin: Datatable -->
      <div class="m_datatable" id="api_methods"></div>

      <!--end: Datatable -->
    </div>
  </div>
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
    var data = {
      type: "remote",
      source: this.ajax,
      pageSize: 10
    };
    var config = new Object();
    config.data = data;
    //
    this.config;
    var t = {
      data: {
        type: "remote",
        source: this.ajax,
        pageSize: 10
      },
      layout: {
        theme: "default",
        class: "",
        scroll: !0,
        height: 550,
        footer: !1
      },
      sortable: !0,
      pagination: !0,
      search: { input: $("#generalSearch") },
      columns: [
        {
          field: "RecordID",
          title: "#",
          sortable: !1,
          width: 40,
          // locked: { left: "xl" },
          selector: { class: "m-checkbox--solid m-checkbox--brand" }
        },
        {
          field: "ID",
          title: "ID",
          sortable: !1,
          width: 40,
          // locked: { left: "xl" },
          template: "{{RecordID}}"
        },
        {
          field: "ShipCountry",
          title: "Ship Country",
          width: 150,
          template: function(t) {
            return t.ShipCountry + " - " + t.ShipCity;
          }
        },
        { field: "Longitude", title: "Longitude" },
        { field: "ShipCity", title: "Ship City" },
        { field: "Currency", title: "Currency", width: 100 },
        { field: "ShipDate", title: "Ship Date", sortable: "asc" },
        { field: "Latitude", title: "Latitude" },
        {
          field: "Status",
          title: "Status",
          template: function(t) {
            var a = {
              1: { title: "Pending", class: "m-badge--brand" },
              2: { title: "Delivered", class: " m-badge--metal" },
              3: { title: "Canceled", class: " m-badge--primary" },
              4: { title: "Success", class: " m-badge--success" },
              5: { title: "Info", class: " m-badge--info" },
              6: { title: "Danger", class: " m-badge--danger" },
              7: { title: "Warning", class: " m-badge--warning" }
            };
            return (
              '<span class="m-badge ' +
              a[t.Status].class +
              ' m-badge--wide">' +
              a[t.Status].title +
              "</span>"
            );
          }
        },
        {
          field: "Type",
          title: "Type",
          template: function(t) {
            var a = {
              1: { title: "Online", state: "danger" },
              2: { title: "Retail", state: "primary" },
              3: { title: "Direct", state: "accent" }
            };
            return (
              '<span class="m-badge m-badge--' +
              a[t.Type].state +
              ' m-badge--dot"></span>&nbsp;<span class="m--font-bold m--font-' +
              a[t.Type].state +
              '">' +
              a[t.Type].title +
              "</span>"
            );
          }
        },
        {
          field: "Actions",
          width: 110,
          title: "Actions",
          sortable: !1,
          locked: { right: "xl" },
          overflow: "visible",
          template: function(t, a, e) {
            return (
              '\t\t\t\t\t\t<div class="dropdown ' +
              (e.getPageSize() - a <= 4 ? "dropup" : "") +
              '">\t\t\t\t\t\t\t<a href="#" class="btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" data-toggle="dropdown">                                <i class="la la-ellipsis-h"></i>                            </a>\t\t\t\t\t\t  \t<div class="dropdown-menu dropdown-menu-right">\t\t\t\t\t\t    \t<a class="dropdown-item" href="#"><i class="la la-edit"></i> Edit Details</a>\t\t\t\t\t\t    \t<a class="dropdown-item" href="#"><i class="la la-leaf"></i> Update Status</a>\t\t\t\t\t\t    \t<a class="dropdown-item" href="#"><i class="la la-print"></i> Generate Report</a>\t\t\t\t\t\t  \t</div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="Edit details">\t\t\t\t\t\t\t<i class="la la-edit"></i>\t\t\t\t\t\t</a>\t\t\t\t\t\t<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Delete">\t\t\t\t\t\t\t<i class="la la-trash"></i>\t\t\t\t\t\t</a>\t\t\t\t\t'
            );
          }
        }
      ]
    };

    var a = $(".m_datatable").mDatatable(t);
    $("#m_datatable_destroy").on("click", function() {
      $(".m_datatable").mDatatable("destroy");
    }),
      $("#m_datatable_init").on("click", function() {
        a = $(".m_datatable").mDatatable(t);
      }),
      $("#m_datatable_reload").on("click", function() {
        $(".m_datatable").mDatatable("reload");
      }),
      $("#m_datatable_sort_asc").on("click", function() {
        a.sort("ShipCity", "asc");
      }),
      $("#m_datatable_sort_desc").on("click", function() {
        a.sort("ShipCity", "desc");
      }),
      $("#m_datatable_get").on("click", function() {
        if ((a.rows(".m-datatable__row--active"), a.nodes().length > 0)) {
          var t = a
            .columns("Longitude")
            .nodes()
            .text();
          $("#datatable_value").html(t);
        }
      }),
      $("#m_datatable_check").on("click", function() {
        var t = $("#m_datatable_check_input").val();
        a.setActive(t);
      }),
      $("#m_datatable_check_all").on("click", function() {
        $(".m_datatable").mDatatable("setActiveAll", !0);
      }),
      $("#m_datatable_uncheck_all").on("click", function() {
        $(".m_datatable").mDatatable("setActiveAll", !1);
      }),
      $("#m_datatable_hide_column").on("click", function() {
        a.columns("Currency").visible(!1);
      }),
      $("#m_datatable_show_column").on("click", function() {
        a.columns("Currency").visible(!0);
      }),
      $("#m_datatable_remove_row").on("click", function() {
        a.rows(".m-datatable__row--active").remove();
      }),
      // search
      $("#SearchCurrency").on("keyup", function() {
        a.search($(this).val(), "Currency");
      }),
      $("#SearchShipDate").on("keyup", function() {
        a.search($(this).val(), "ShipDate");
      }),
      $("#SearchShipDate").on("keyup", function() {
        a.search($(this).val(), "ShipDate");
      }),
      $("#SearchCity").on("keyup", function() {
        a.search($(this).val(), "ShipCity");
      });
  }
};
</script>
