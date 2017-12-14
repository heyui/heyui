<template>
  <div>
    <blockquote>基本使用</blockquote>
    <p>value: {{value}}</p>
    <div>
      <DateFullRangePicker v-model="value"></DateFullRangePicker>
    </div>
    <blockquote>设置周选择的开始日期，示例：设置周日作为一周开始的日期</blockquote>
    <p>value: {{value2}}</p>
    <div>
      <DateFullRangePicker v-model="value2" :start-week="7"></DateFullRangePicker>
    </div>
  </div>
</template>

<script>
import manba from 'manba';

export default {
  data() {
    return {
      value: null,
      value2: null
    }
  }
}
</script>