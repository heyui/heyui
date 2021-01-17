<template>
  <Form :readonly="true">
    <FormItem label="Name">{{data.name}}</FormItem>
    <FormItem label="Age">{{data.age}}</FormItem>
    <FormItem label="School">{{data.school}}</FormItem>
    <FormItem label="Gender">{{data.sex}}</FormItem>
  </Form>
</template>
<script>
export default {
  data() {
    return {
      data: {
        name: 'Harward',
        age: 18,
        school: 'A university in USA',
        sex: 'Female'
      }
    };
  }
};
</script>
