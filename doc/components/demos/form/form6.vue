<template>
  <div>
    <Form mode="inline">
      <FormItem>
        <div class="h-input-group"><span class="h-input-addon"><i class="h-icon-user"></i></span>
          <input type="text"/>
        </div>
      </FormItem>
      <FormItem>
        <div class="h-input-group"><span class="h-input-addon"><i class="h-icon-setting"></i></span>
          <input type="password"/>
        </div>
      </FormItem>
      <FormItem>
        <Button color="primary"
                :loading="isLoading"
                @click="isLoading=!isLoading">提交</Button>&nbsp;&nbsp;&nbsp;<Button @click="isLoading=!isLoading">取消</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isLoading: false,
    }
  }
};
</script>