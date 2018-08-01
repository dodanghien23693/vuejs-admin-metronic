
 <template>
<div>
    <h1>from-validation component</h1>
    <slot name="form">
        <div class="form-group m-form__group col-md-6">
            <div slot="form-textarea" class="form-control m-input"></div>
        </div>  
    </slot>
</div>
</template>
<script>
export default {
  name: "from-validation"
};
</script>
<style lang="scss" scoped>
h1 {
  color: red;
}
</style>
