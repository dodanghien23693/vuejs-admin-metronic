<Panel>

  <p>
    <Button style="color: red">v-model</Button> là model trong vuejs dùng để bắt giá trị được chọn (selected) của select box
  </p>

  <p>
    <Button style="color: red">:options</Button>là dữ liệu đầu vào cho người dùng select
  </p>

</Panel>

Ví dụ cách sử dụng component <strong style="background-color: orange">`<app-select2></app-select2>` </strong>

```vue
<template>
        <div class="formç-group m-form__group col-md-6">
            <label for="exampleSelect1">select multi 2 component</label>
            <app-select2 :options="options" v-model="selected" placeholder="Hãy chọn" class="form-control m-input"></app-select2>
            {{selected}}
        </div>
</template>

<script>
import AppSelect2 from "@/components/select2/AppSelect2.vue";
export default {
	components: {
		AppSelect2
	},
	data() {
		return {
			options: [
				{ title: "option1", value: "1" },
				{ title: "option2", value: "2" },
				{ title: "option3", value: "3" }
			],
			selected: 2
		};
	}
};
</script>
```
