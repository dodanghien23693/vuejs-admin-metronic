
-- cách sử dụng
+ truyền Data cần hiển thị và Object config cấu hình Summernote
 + v-model="data " 
+ v-bind:config="Object"
+ Ví dụ:
  let config = {
      height: 300,
      minHeight: null,
      maxHeight: null,
      focus: true
    };
  let data = "noi dung summernote";
```js
let config = {
    height: 300,
    minHeight: null,
    maxHeight: null,
    focus: true
  };
let data = "noi dung summernote";
<app-summernote v-model="data" v-bind:config="config"></app-summernote>
```
+ Ví dụ 2:
  let config = {
      height: 300,
      minHeight: null,
      maxHeight: null,
      focus: true
    };
  let data = "noi dung summernote";
```js
let config = {
    height: 200
  };
let data = "noi dung summernote";
<app-summernote v-model="data" v-bind:config="config"></app-summernote>
```