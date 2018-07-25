
<script>
import template from "./UserListPage.html";
export default {
  template: template,
  name: "user-list",
  mounted() {
    var DatatableHtmlTableDemo = (function() {
      var demo = function() {
        var datatable = $(".m-datatable").mDatatable({
          data: {
            saveState: { cookie: false }
          },
          search: {
            input: $("#generalSearch")
          },
          columns: [
            {
              field: "Deposit Paid",
              type: "number"
            },
            {
              field: "Order Date",
              type: "date",
              format: "YYYY-MM-DD"
            },
            {
              field: "Status",
              title: "Status",
              template: function(row) {
                var status = {
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
                  status[row.Status].class +
                  ' m-badge--wide">' +
                  status[row.Status].title +
                  "</span>"
                );
              }
            },
            {
              field: "Type",
              title: "Type",
              template: function(row) {
                var status = {
                  1: { title: "Online", state: "danger" },
                  2: { title: "Retail", state: "primary" },
                  3: { title: "Direct", state: "accent" }
                };
                return (
                  '<span class="m-badge m-badge--' +
                  status[row.Type].state +
                  ' m-badge--dot"></span>&nbsp;<span class="m--font-bold m--font-' +
                  status[row.Type].state +
                  '">' +
                  status[row.Type].title +
                  "</span>"
                );
              }
            }
          ]
        });

        $("#m_form_status").on("change", function() {
          datatable.search(
            $(this)
              .val()
              .toLowerCase(),
            "Status"
          );
        });

        $("#m_form_type").on("change", function() {
          datatable.search(
            $(this)
              .val()
              .toLowerCase(),
            "Type"
          );
        });

        $("#m_form_status, #m_form_type").selectpicker();
      };
      return {
        init: function() {
          demo();
        }
      };
    })();

    DatatableHtmlTableDemo.init();
  }
};
</script>
