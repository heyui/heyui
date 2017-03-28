<template>
  <div class="doc">
    <h2>Grid 栅格</h2>
    <p>我们采用标准的24栅格系统，利用栅格系统完成简单的网络布局。</p>
    <h3>基本的排版</h3>
    <p>利用基本的class<code>.col-n</code>进行排版布局。</p>
    <example demo="grid"></example>

    <h3>组件排版</h3>
    <p>利用组件<code>Row</code>,<code>Col</code>进行排版布局。</p>
    <blockquote>注意：当使用非字符串模式的时候，请使用<code>h-row</code>,<code>h-col</code>，详情请参考<a href="https://cn.vuejs.org/v2/guide/components.html#组件命名约定" target="_blank">Vue组件命名约定</a></blockquote>
    <example demo="grid"></example>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  methods: {
  },
  components:{
  }
}
</script>
