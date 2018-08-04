<script>
import template from "./CreateDateTime.html";
import AppDatePicker from "../../components/date-picker/AppDatePicker";
import AppDateTimePicker from "../../components/datetime-picker/AppDateTimePicker";

export default {
  template: template,
  name: "create-date-time",
  components: {
    AppDatePicker,
    AppDateTimePicker
  },
  created: function() {},
  methods: {
    Change: function() {
      console.log(this.userInfor);
    }
  }
};
</script>
