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

    <h3>参数设定是否必填</h3>
    <example demo="form/form5"></example>

    <h3>单独调用验证方法</h3>
    <example demo="form/form6"></example>

    <h3>只读的表单</h3>
    <example demo="form/form2"></example>

    <h3>修改密码验证</h3>
    <example demo="form/form4"></example>

    <h3>Form 参数</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>mode</td>
        <td>排版模式</td>
        <td>String</td>
        <td>inline,single,twocolumn</td>
        <td>single</td>
      </tr>
      <tr>
        <td>model</td>
        <td>关联的model模型，用于数据validator。详情至<a href="https://github.com/heyui/hey-validator" target="_blank">hey-validator</a></td>
        <td>Object</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>labelWidth</td>
        <td>说明文字的宽度</td>
        <td>Number</td>
        <td>-</td>
        <td>80</td>
      </tr>
      <tr>
        <td>no-valid</td>
        <td>只读的表单</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>rules</td>
        <td>数据validator规则。详情至<a href="https://github.com/heyui/hey-validator" target="_blank">hey-validator</a></td>
        <td>Object</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>labelPosition</td>
        <td>说明文字的位置</td>
        <td>String</td>
        <td>left,right</td>
        <td>right</td>
      </tr>
      <tr>
        <td>top</td>
        <td>错误的时候滑动到错误input的位置</td>
        <td>Number</td>
        <td>0-1，百分比</td>
        <td>0.5</td>
      </tr>
      <tr>
        <td>topOffset</td>
        <td>错误的时候滑动到错误input的位置的高度位移</td>
        <td>Number</td>
        <td>-</td>
        <td>0</td>
      </tr>
    </table>

    <h3>Form 方法</h3>
    <table class="table">
      <tr>
        <th>方法名</th>
        <th>说明</th>
      </tr>
      <tr>
        <td>valid</td>
        <td>valid(): 整体验证表单</td>
      </tr>
      <tr>
        <td>validField</td>
        <td>validField(prop): 整体个体字段</td>
      </tr>
      <tr>
        <td>validFieldJs</td>
        <td>validFieldJs(prop, next): 单纯执行验证，不触发dom操作</td>
      </tr>
      <tr>
        <td>reset</td>
        <td>reset(): 重置验证</td>
      </tr>
    </table>

    <h3>FormItem 参数</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>label</td>
        <td>文字</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>prop</td>
        <td>关联的model中对应的字段，可以自动做required属性判断，用于数据validator。详情至<a href="https://github.com/heyui/hey-validator" target="_blank">hey-validator</a></td>
        <td>Object</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>showLabel</td>
        <td>是否显示label</td>
        <td>Boolean</td>
        <td></td>
        <td>false</td>
      </tr>
      <tr>
        <td>required</td>
        <td>当一个label针对的输入比较复杂时，可以单独设置，只做必填样式的展示。</td>
        <td>Boolean</td>
        <td></td>
        <td>false</td>
      </tr>
      <tr>
        <td>single</td>
        <td>是否为独立一行，主要是在<code>twocolumn</code>模式下使用，适用于<code>textarea</code>这种不定高度的模块。</td>
        <td>Boolean</td>
        <td></td>
        <td>false</td>
      </tr>
    </table>

    <h3>FormItem 方法</h3>
    <table class="table">
      <tr>
        <th>方法名</th>
        <th>说明</th>
      </tr>
      <tr>
        <td>reset</td>
        <td>reset(): 重置验证一个FormItem</td>
      </tr>
    </table>
  </div>
</template>
