
<template>
  <div class="m-typeahead">
    <input ref="input" class="form-control m-input col-md-12" :value="value" type="text">
  </div>
</template>
<script>
export default {
  name: "app-type-ahead",
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
    let self = this;
    $(this.$refs.input)
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
        self.value = $(this).val();
        self.$emit("input", self.value);
      });
  }
};
</script>
