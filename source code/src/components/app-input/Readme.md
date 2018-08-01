
### Ví dụ sử dụng input

#### Email input:
```js
let inputEmail = "demo@app.vn";
<div class='col-sm-2'>
    Giá trị binding:<b> {{inputEmail}} </b>
    <app-input type="email" v-model="inputEmail" placeholder="Nhập email"> </app-input>
</div>


```

#### Number input:
```js
let inputNumber = 5;
<div class='col-sm-2'>
    Giá trị binding:<b> {{inputNumber}} </b>
    <app-input type="number" v-model="inputNumber" placeholder="Nhập số"/>
</div>
```