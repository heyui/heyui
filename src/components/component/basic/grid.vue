<template>
  <div class="doc">
    <h2>Grid 布局</h2>
    <p>我们采用标准的24格布局容器，利用容器完成简单的网络布局。</p>
    <h3>基本的排版</h3>
    <p>利用基本的class<code>.h-col-n</code>进行排版布局。</p>
    <example demo="grid1"></example>

    <h3>组件排版</h3>
    <p>利用组件<code>Row</code>,<code>Col</code>进行排版布局，通过<code>width</code>设定宽度，在非flex类型、没有设定sm等宽度的情况下，默认<code>width</code>为24，即整行。</p>
    <blockquote>注意：当使用非字符串模式的时候，请使用<code>h-row</code>,<code>h-col</code>，详情请参考<a href="https://cn.vuejs.org/v2/guide/components.html#组件命名约定" target="_blank">vue组件命名约定</a></blockquote>
    <example demo="grid2"></example>

    <h3>区块间隔</h3>
    <p>通过给<code>Row</code>添加<code>space</code>属性，让<code>Col</code>产生间距。间距可以设置为任意整数数值。</p>
    <blockquote>我们使用的并非是栅格的排列布局，所以可以对循环的区块做布局。</blockquote>
    <example demo="grid3"></example>

    <h3>横向，竖向区块间隔</h3>
    <p>通过给<code>Row</code>添加<code>space-x</code>,<code>space-y</code>属性，让<code>Col</code>产生间距。</p>
    <example demo="grid4"></example>

    <h3>Flex布局</h3>
    <p>Flex布局主要使用在flex自适应的场景中。</p>
    <example demo="grid5"></example>

    <h3>自适应布局</h3>
    <p>实现响应式设计，利用四个尺寸：xs, sm, md, lg。</p>
    <example demo="grid6"></example>

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
