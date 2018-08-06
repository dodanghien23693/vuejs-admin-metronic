<script>
import template from "./CreateDateTime.html";
import AppDatePicker from "../../components/date-picker/AppDatePicker";
import AppDateTimePicker from "../../components/datetime-picker/AppDateTimePicker";
import DateTime from "../../components/date-time/DateTime";

export default {
  template: template,
  name: "create-date-time",
  components: {
    AppDatePicker,
    AppDateTimePicker,
    DateTime
  },
  created: function() {},
  methods: {
    Change: function() {
      console.log(this.userInfor);
    }
  }
};
</script>
