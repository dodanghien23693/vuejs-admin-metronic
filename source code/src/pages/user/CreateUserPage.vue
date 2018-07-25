<script>
import template from "./CreateUserPage.html";
export default {
    template: template,
    name:'create-user-page',
    methods:{
        doLogin(){
            //gọi request thông qua axios
            this.$http.post('').then(()=>{

            });
        }
    }

}
</script>
