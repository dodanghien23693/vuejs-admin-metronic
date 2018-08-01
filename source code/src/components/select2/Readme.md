<Panel>

  <p>
    <Button style="color: red">v-model</Button> là model trong vuejs dùng để bắt giá trị được chọn (selected) của select box
  </p>

  <p>
    <Button style="color: red">:options</Button>là dữ liệu đầu vào cho người dùng select
  </p>

</Panel>

Ví dụ cách sử dụng component <strong style="background-color: orange">`<app-select2></app-select2>` </strong>

```js
        let options = [
            {title: "option 1", value: "1"},
        {title: "option 2", value: "2"},
        {title: "option 3", value: "3"},
        {title: "option 4", value: "4"}
        ]
        let selected = 1;
                let selected_multi = [];
        <div class="form-group m-form__group col-md-6">
            <label for="exampleSelect1">select 2 component</label>
            <app-select2 :options="options" v-model="selected" placeholder="Hãy chọn" class="form-control m-input"></app-select2>
            <span>Giá trị chọn là {{selected}}</span>

            <label for="exampleSelect1">select multi 2 component</label>
            <app-select2 :options="options" v-model="selected_multi" placeholder="Hãy chọn" multiple = "true" class="form-control m-input"></app-select2>
            <span>Giá trị multiple chọn là {{selected_multi}}</span>
        </div>
```
