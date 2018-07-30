
-- cách sử dụng
+ truyền Data cần hiển thị và Object config cấu hình Summernote
 + v-model="data " 
+ config="config"
+ Ví dụ:

```js
let config = {
    height: 300,
    minHeight: null,
    maxHeight: null,            
    focus: true   
  };
let data = "noi dung summernote";
<app-summernote v-model="data " config="config"></app-summernote>
```
