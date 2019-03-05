<template>
  <div class="doc">
    <h2>AutoComplete 模糊匹配</h2>
    <p class="component-name-tip">非 template/render 模式下，请使用 <code>h-autocomplete</code>。</p>

    <h3>异步数据请求</h3>
    <p><code>autocomplete</code>有三种数据类型：<code>key</code>,<code>title</code>,<code>object</code>，如果需求更复杂，请监听<code>change</code>事件手动处理。</p>
    <example demo="dataplugins/autocomplete4"></example>

    <h3>选择模式</h3>
    <example demo="dataplugins/autocomplete8"></example>

    <h3>可以任意输入模式</h3>
    <p class="tip">使用<code>mustMatch</code>参数即可。</p>
    <p>此种方式只能选择使用<code>title</code>与<code>object</code>类型的数据。</p>
    <p>设置<code>endInput</code>可以设定特殊字符确定输入，类似enter键。</p>
    <example demo="dataplugins/autocomplete9"></example>

    <h3>自定义样式</h3>
    <p>通过自定义<code>className</code>参数，自己定义特殊的样式。</p>
    <example demo="dataplugins/autocomplete14"></example>

    <h3>自定义内容</h3>
    <p>通过<code>top</code>以及<code>bottom</code>的<code>slot</code>，自定义其他的内容。</p>
    <example demo="dataplugins/autocomplete6"></example>

    <h3>传递外部参数</h3>
    <example demo="dataplugins/autocomplete10"></example>

    <h3>disabled</h3>
    <example demo="dataplugins/autocomplete2"></example>

    <h3>静态数据列表</h3>
    <p>可以使用<code>dict</code>调用系统全局配置的字典，或者通过<code>datas</code>传递数据。</p>
    <example demo="dataplugins/autocomplete1"></example>
<!--
    <h3>多选</h3>
    <example demo="dataplugins/autocomplete3"></example> -->

    <!-- <h3>远程</h3>
    <p>通过<code>options</code>的<code>loadData</code>方法执行远程数据查询，执行完毕后调用<code>callback</code>方法返回数据。</p>
    <p>下面的用例使用的只是单纯的title值，请使用<code>type="title"</code>。</p>
    <example demo="dataplugins/autocomplete4"></example>

    <h3>选择模式</h3>
    <example demo="dataplugins/autocomplete5"></example> -->

    <!-- <h3>自定义返回数据的结构</h3>
    <p></p>
    <example demo="dataplugins/autocomplete11"></example> -->

    <!-- <h3>可以任意输入对象多选</h3> -->
    <!-- <example demo="dataplugins/autocomplete12"></example> -->

    <h3>全局配置</h3>
    <p>可以通过全局配置<code>autocomplete.default</code>参数设置控件默认的参数值。</p>
    <example demo="dataplugins/autocomplete13"></example>

    <h3>AutoComplete 参数</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>disabled</td>
        <td>是否禁用</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>type</td>
        <td>类型</td>
        <td>String</td>
        <td>key, object, title</td>
        <td>key</td>
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
        <td>mustMatch</td>
        <td>是否必须是选择的项</td>
        <td>Boolean</td>
        <td>-</td>
        <td>true</td>
      </tr>
      <tr>
        <td>datas</td>
        <td>选择的数据</td>
        <td>Array, Object</td>
        <td>-</td>
        <td></td>
      </tr>
      <tr>
        <td>dict</td>
        <td>调用全局定义的字典</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>placeholder</td>
        <td>展示默认提示语</td>
        <td>String</td>
        <td>-</td>
        <td>请选择</td>
      </tr>
      <tr>
        <td>show</td>
        <td>默认展示的文字，针对与存储key值，但是拥有show值的情景</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>emptyContent</td>
        <td>没有搜索到值的提示语</td>
        <td>String</td>
        <td>-</td>
        <td>未搜索到相关数据</td>
      </tr>
      <tr>
        <td>config</td>
        <td>使用全局配置的方法</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>className</td>
        <td>自定义className</td>
        <td>String</td>
        <td>-</td>
        <td></td>
      </tr>
      <tr>
        <td>autoSelectFirst</td>
        <td>是否自动选中第一个选项</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>endInput</td>
        <td>设定特殊字符触发enter</td>
        <td>String</td>
        <td>-</td>
        <td></td>
      </tr>
      <tr>
        <td>showDropdownWhenNoResult</td>
        <td>当无数据的时候，是否展示下拉列表</td>
        <td>Boolean</td>
        <td>-</td>
        <td>true</td>
      </tr>
    </table>

    <h3>AutoComplete 事件</h3>
    <table class="table">
      <tr>
        <th>事件名</th>
        <th>说明</th>
        <th>返回数值</th>
      </tr>
      <tr>
        <td>input</td>
        <td>model值产生变化的触发</td>
        <td>model对应的值</td>
      </tr>
      <tr>
        <td>change</td>
        <td>model值产生变化的触发</td>
        <td>现在的数据对象，以及触发来源事件：enter, blur, picker, remove, clear</td>
      </tr>
    </table>

    <h3>AutoComplete 方法</h3>
    <table class="table">
      <tr>
        <th>事件名</th>
        <th>说明</th>
        <th>参数</th>
      </tr>
      <tr>
        <td>hide</td>
        <td>隐藏下拉框</td>
        <td>无</td>
      </tr>
      <tr>
        <td>search</td>
        <td>主动触发搜索</td>
        <td>无</td>
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
        <td>key</td>
        <td>数据的key对应字段</td>
        <td>String</td>
        <td>-</td>
        <td>全局配置<code>autocomplete.default.key</code></td>
      </tr>
      <tr>
        <td>title</td>
        <td>数据的title对应字段</td>
        <td>String</td>
        <td>-</td>
        <td>全局配置<code>autocomplete.default.title</code></td>
      </tr>
      <tr>
        <td>getValue</td>
        <td>通过数据定义出标准的输出格式</td>
        <td>Function</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>minWord</td>
        <td>开始查询的最低单词数量</td>
        <td>Number</td>
        <td>-</td>
        <td>0</td>
      </tr>
      <tr>
        <td>loadData</td>
        <td>异步获取数据的方法</td>
        <td>Function</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>delay</td>
        <td>数据获取的delay时间，提升性能，单位为毫秒</td>
        <td>Number</td>
        <td>-</td>
        <td>100</td>
      </tr>
    </table>

    <h3>Slot top/bottom</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
      </tr>
      <tr>
        <td>results</td>
        <td>当前列表结果值</td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  data() {
    return {
    };
  }
};
</script>
