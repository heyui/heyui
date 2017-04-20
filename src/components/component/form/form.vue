<template>
  <div class="doc">
    <h2>Form 表单</h2>
    <h3>基本</h3>
    <example demo="form/form1"></example>
    <h3>三种排版以及验证</h3>
    <p>Form提供三种排列方式: <code>single</code>一个FormItem一行, <code>block</code>标题独立一行, <code>twocolumn</code>两列一行。</p>
    <p>在<code>twocolumn</code>的排列的方式下，对<code>FormItem</code>添加<code>block</code>参数即可列为一行，主要针对<code>textarea</code>这种不定行高的对象。</p>
    <blockquote>注意：当使用<code>for</code>循环组件的时候，请使用<code>FormItemList</code>组件对<code>FormItem</code>添加一层嵌套，防止<code>FormItem</code>在同一个parent下没有使用key作为唯一值引用而产生BUG。</blockquote>
    <example demo="form/form3"></example>
    <h3>Inline排版</h3>
    <example demo="form/form4"></example>
    <h3>不同的组合样式1</h3>
    <example demo="form/form5"></example>
    <h3>不同的组合样式2</h3>
    <example demo="form/form6"></example>
  </div>
</template>
