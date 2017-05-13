<template>
  <div>
    <Form mode="inline">
      <FormItem label="用户名"
                :required="true">
        <input type="text"/>
      </FormItem>
      <FormItem label="密码"
                :required="true">
        <input type="password"/>
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