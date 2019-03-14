<template>
  <Form :readonly="true" :label-width="10*16">
    <FormItem label="姓名">{{data.name}}</FormItem>
    <FormItem label="年龄">{{data.age}}</FormItem>
    <FormItem label="学校">{{data.school}}</FormItem>
    <FormItem label="性别">{{data.sex}}</FormItem>
    <FormItem label="输入框来自form组件">
      <Input type="text" v-model="data.name"></Input>
    </FormItem>
    <FormItem label="输入框可以编辑">
      <Input type="text" v-model="data.name" :readonly="false"></Input>
    </FormItem>
    <FormItem label="描述" :readonly="true">
      <Textarea v-model="data.descript"></Textarea>
    </FormItem>
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
        sex: '女',
        descript: '我是描述'
      }
    };
  }
};
</script>
