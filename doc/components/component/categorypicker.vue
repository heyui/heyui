<template>
  <div class="doc">
    <h2>CategoryPicker </h2>
    <blockquote>1.18.0+</blockquote>

    <p class="component-name-tip">非 template/render 模式下，请使用 <code>h-categorypicker</code>。</p>

    <h3>基本调用</h3>
    <p>本示例提供的是三级地址联动示例，文件 js/locations 链接： <a href="https://github.com/heyui/heyui/tree/master/doc/js/locations" target="_blank">js/locations</a></p>
    <p>元素是否可以被选中，可以通过传递的数据中字段 selectable, checkable 做控制，也可以通过 option 参数中 selectable, checkable 方法做判断。</p>
    <example demo="categorypicker/categorypicker1"></example>

    <h3>字典配置</h3>
    <p>具体配置请参考 <a href="https://github.com/heyui/heyui/blob/master/doc/js/config/heyui-config.js#L102" target="_blank">heyui-config.js</a></p>
    <p>本配置中，未添加任何的 selectable, checkable 控制，所以，所有的数据都可以选择。</p>
    <p>本配置使用的是异步加载的方式，性能更佳。</p>
    <example demo="categorypicker/categorypicker2"></example>

    <h3>CategoryPicker 参数</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>type</td>
        <td>数据类型</td>
        <td>String</td>
        <td>key,object</td>
        <td>key</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td></td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>option</td>
        <td>配置项，详细参见下面的option说明</td>
        <td>Object</td>
        <td>-</td>
        <td></td>
      </tr>
      <tr>
        <td>multiple</td>
        <td>多选</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>limit</td>
        <td>限制可以选择多少项</td>
        <td>Number</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>showAllLevels</td>
        <td>是否展示所有的路径</td>
        <td>Boolean</td>
        <td>-</td>
        <td>true</td>
      </tr>
      <tr>
        <td>showChildCount</td>
        <td>是否展示子级数量</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>config</td>
        <td>使用全局配置的方法</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
    </table>

    <h3>option 配置</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>keyName</td>
        <td>数据的key对应字段</td>
        <td>String</td>
        <td>-</td>
        <td>全局配置<code>categoryPicker.default.keyName</code></td>
      </tr>
      <tr>
        <td>titleName</td>
        <td>数据的title对应字段</td>
        <td>String</td>
        <td>-</td>
        <td>全局配置<code>categoryPicker.default.titleName</code></td>
      </tr>
      <tr>
        <td>parentName</td>
        <td>数据的parent对应字段</td>
        <td>String</td>
        <td>-</td>
        <td>全局配置<code>categoryPicker.default.parentName</code></td>
      </tr>
      <tr>
        <td>childrenName</td>
        <td>数据的children对应字段</td>
        <td>String</td>
        <td>-</td>
        <td>全局配置<code>categoryPicker.default.childrenName</code></td>
      </tr>
      <tr>
        <td>dataMode</td>
        <td>提供的数据类型，是平铺需要解析的列表，还是已经生成好的tree数据</td>
        <td>String</td>
        <td>list, tree</td>
        <td>-</td>
      </tr>
      <tr>
        <td>datas</td>
        <td>用于tree展示的数据</td>
        <td>Array</td>
        <td>-</td>
        <td>[]</td>
      </tr>
      <tr>
        <td>getTotalDatas</td>
        <td>异步获取用于tree展示的数据，一次性全部加载</td>
        <td>Function(resolve)</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>getDatas</td>
        <td>异步获取用于tree展示的数据，每一次单击获取子集</td>
        <td>Function(parent, resolve)</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>selectable</td>
        <td>设置哪些项目可以被选择</td>
        <td>Function(data, level)</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>checkable</td>
        <td>设置哪些项目可以被选中</td>
        <td>Function(data, level)</td>
        <td>-</td>
        <td>-</td>
      </tr>
    </table>
  </div>
</template>
