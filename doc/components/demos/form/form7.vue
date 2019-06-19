<template>
    <Form
            ref="testForm"
            :showErrorTip="true"
            :rules="validationRules"
            :validOnChange="true"
            :model="data">
        <FormItem label="类型" prop="type" :required="true">
            <Select v-model="data.type" autosize :datas="typeParams"></Select>
        </FormItem>
        <FormItem label="配置项1" prop="item1" key="item1" :required="true" v-if="data.type>=2">
            <input
                    type="text"
                    v-model="data.item1"
                    placeholder="请输入配置项1"
            />
        </FormItem>
        <FormItem label="配置项2" prop="item2" key="item2" :required="true" v-if="data.type>=3">
            <input
                    type="text"
                    v-model="data.item2"
                    placeholder="请输入配置项2"/>
        </FormItem>
        <FormItem label="配置项3" prop="item3" key="item3" :required="true" v-if="data.type>=4">
            <input
                    type="text"
                    v-model="data.item3"
                    placeholder="请输入配置项3"/>
        </FormItem>
        <FormItem>
            <Button color="primary" @click="updateRules">重置rules</Button>
            <Button color="primary" @click="submit">提交</Button>
        </FormItem>
    </Form>
</template>
<script>
export default {
  name: 'test',
  data() {
    return {
      typeParams: { 1: '类型1', 2: '类型2', 3: '类型3', 4: '类型4' },
      data: {
        type: null,
        item1: null,
        item2: null,
        item3: null

      },
      validationRules: {}
    };
  },
  methods: {
    updateRules() {
      this.validationRules = {};
    },
    submit() {
      let validResult = this.$refs.testForm.valid();
      console.log(validResult);
      if (validResult.result) {
        this.$Message('验证成功');
      }
    }
  }
};
</script>
