<template>
  <div class="doc">
  <h2>Form 表单</h2>
    <h3>基本</h3>
    <div><SwitchList :datas="modeParam" v-model="mode"></SwitchList></div>
    <br/>
    <div class="demo-box">
      <div class="demo">
        <Form :label-width="90" :mode="mode" :model="data">
          <!--<FormItem :single="true" label="输入框" prop="input" :required="true"><input type="text" v-model="data.input"/></FormItem>
          
          <FormItem label="金额" :required="true">
            <div class="h-input-group">
              <FormItem prop="money.min" label="起始金额" :show-label="false"><input type="text" placeholder="起始金额" v-model="data.money.min"/></FormItem>
              <span class="h-input-addon">-</span>
              <FormItem prop="money.max" label="结束金额" :show-label="false"><input type="text" placeholder="结束金额" v-model="data.money.max"/></FormItem>
              <span class="h-input-addon">K</span>
            </div>
          </FormItem>-->
          <FormItem v-for="(item, index) of data.inputs" :key="item" :label="'输入框'+(index+1)" :required="true" :prop="'inputs['+index+'].value'">
            <Col width="18"><input type="text" v-model="item.value"/></Col><Col width="6" class="text-right"><Button text-color="red" v-width="'90%'" :block="true" @click="remove(index)" icon="trash">删除</Button></Col>
          </FormItem>
          <FormItem :single="true"><Button size="s" text-color="blue" @click="add">添加输入框</Button></FormItem>
          <p><span>ceshi</span></p>
          <!--<FormItem label="日期" :required="true" prop="date">
            <input type="text" placeholder="日期" v-model="data.date"/>
          </FormItem>
          <FormItem label="评分" :required="true" prop="rate">
            <Rate v-model="data.rate" :show-text="true"></Rate>
          </FormItem>
          <FormItem label="多文本" :single="true" :required="true" prop="textarea"><textarea rows="3" v-autosize v-model="data.textarea"></textarea></FormItem>
          <FormItem label="单选" prop="radio"><Radio v-model="data.radio" :datas="dataParam"></Radio></FormItem>
          <FormItem label="多选" prop="checkbox"><Checkbox v-model="data.checkbox" :datas="dataParam"></Checkbox></FormItem>
          <FormItem><Button color="primary" size="l" :loading="isLoading" @click="isLoading=!isLoading">提交</Button>&nbsp;&nbsp;&nbsp;<Button @click="isLoading=!isLoading" size="l">取消</Button></FormItem>
        --></Form>
      </div>
    </div>
    {{data}}

    <div class="demo-box">
      <div class="demo">
        <Form mode="inline">
          <FormItem label="用户名" :required="true"><input type="text" v-model="data.input"/></FormItem>
          <FormItem label="密码" :required="true"><input type="password" v-model="data.textarea"/></FormItem>
          <FormItem><Button color="primary" :loading="isLoading" @click="isLoading=!isLoading">提交</Button></FormItem>
        </Form>
      </div>
    </div>
    <div class="demo-box">
      <div class="demo">
        <Form mode="inline">
          <FormItem><div class="h-input"><input type="text" v-model="data.input"/><i class="h-icon-user"></i></div></FormItem>
          <FormItem><div class="h-input"><input type="password" v-model="data.textarea"/><i class="h-icon-setting"></i></div></FormItem>
          <FormItem><Button color="primary" :loading="isLoading" @click="isLoading=!isLoading">提交</Button></FormItem>
        </Form>
      </div>
    </div>
    <div class="demo-box">
      <div class="demo">
        <Form mode="inline">
          <FormItem><div class="h-input-group"><span class="h-input-addon"><i class="h-icon-user"></i></span><input type="text" v-model="data.input"/></div></FormItem>
          <FormItem><div class="h-input-group"><span class="h-input-addon"><i class="h-icon-setting"></i></span><input type="password" v-model="data.textarea"/></div></FormItem>
          <FormItem><Button color="primary" :loading="isLoading" @click="isLoading=!isLoading">提交</Button></FormItem>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      mode: 'single',
      data: {
        input: '',
        textarea: '',
        radio: 1,
        rate: null,
        checkbox: [1],
        money: {
          min: null,
          max: null
        },
        date: null,
        inputs: []
      },
      dataParam: {
        1: '男',
        2: '女',
        3: '其他'
      },
      isLoading: false,
      modeParam: {
        single: '默认single',
        block: '标题独立一行',
        twocolumn: '两列一行',
      }
    }
  },
  methods: {
    add() {
      this.data.inputs.push({ value: '' });
    },
    remove(index) {
      this.data.inputs.splice(index, 1);
    }
  }
}
</script>
