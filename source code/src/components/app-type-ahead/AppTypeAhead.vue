
<template>
<div class="m-typeahead">
  <input class="form-control m-input col-md-12" :value="value" type="text">
</div>
</template>
<script>
export default {
  //props: ["source", "value"],
  props: {
    /**
     * source là 1 mảng
     */
    source: {
      type: Array,
      default: []
    },
    /**
     * @model
     */
    value: String
  },
  name: "app-type-ahead",
  methods: {},
  mounted() {
    var engine = new Bloodhound({
      limit: 10,
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace("value"),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      local: $.map(this.source, function(item) {
        return { value: item };
      })
    });

    engine.initialize();
    let vm = this;
    $(this.$el)
      .find("input")
      .typeahead(
        {
          hint: true,
          minLength: 1,
          highlight: true
        },
        {
          name: "value",
          displayKey: "value",
          source: engine.ttAdapter(),
          templates: {
            empty: ['<div class="noitems">', "No Items Found", "</div>"].join(
              "\n"
            )
          }
        }
      )
      .val(this.value)
      .trigger("keyup")
      .on("keyup", function() {
        // emit event on change.
        vm.value = $(this).val();
        vm.$emit("input", vm.value);
      });
  }
};
</script>
