### Ví dụ typehead:

```js
  let data_souce = [
    "Việt Nam ",
    "Viet nam",
    "Vit",
    "Viet tel",
    "Trung Quốc",
    "Lào",
    "Thái Lan",
    "Campuchia"
  ];
  let country = "";
  <div class="form-group m-form__group col-md-6">
      <div> Giá trị v-model là:  {{country}}</div>
      <app-type-ahead :source="data_souce" v-model="country"></app-type-ahead>
  </div>
```
