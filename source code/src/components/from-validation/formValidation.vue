
 <template>
<div>
    <h1>from-validation component</h1>
    <slot name="form">
        <div id="form-textarea" class="form-group m-form__group col-md-6">
            <slot name="form-textarea"></slot>
        </div>  
        <div id="form-input" class="form-group m-form__group col-md-6">
            <slot name="form-input"></slot>
        </div>  
        <div id="form-select" class="form-group m-form__group col-md-6">
            <slot name="form-select"></slot>
        </div>
        <div id="form-controls">
            <slot name="form-controls"></slot>
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
