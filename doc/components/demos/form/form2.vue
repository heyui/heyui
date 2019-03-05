<template>
  <Form :readonly="true">
    <FormItem label="姓名">{{data.name}}</FormItem>
    <FormItem label="年龄">{{data.age}}</FormItem>
    <FormItem label="学校">{{data.school}}</FormItem>
    <FormItem label="性别">{{data.sex}}</FormItem>
  </Form>
</template>
<script>
export default {
  data() {
    return {
      data: {
        name: '小王',
        age: 18,
        school: '中国某某大学',
        sex: '女'
      }
    };
  }
};
</script>
