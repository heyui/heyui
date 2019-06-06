<template>
  <div class="doc">
    <h2>Carousel 走马灯</h2>
    <p class="component-name-tip">非 template/render 模式下，请使用 <code>h-carousel</code>。</p>
    <blockquote>1.10.0+</blockquote>

    <h3>基本调用</h3>
    <p><code>datas</code> 中 <code>image</code> 控制显示的图片，<code>link</code> 控制是否为点击态。</p>
    <example demo="carousel/carousel2"></example>

    <h3>不同参数的控制</h3>
    <example demo="carousel/carousel1"></example>

    <h3>自定义导航</h3>
    <example demo="carousel/carousel4"></example>

    <h3>Carousel 参数</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>autoplay</td>
        <td>是否自动循环</td>
        <td>Boolean</td>
        <td>-</td>
        <td>true</td>
      </tr>
      <tr>
        <td>speed</td>
        <td>自动循环等待切换的时间,以毫秒为单位</td>
        <td>Number</td>
        <td>-</td>
        <td>3000</td>
      </tr>
      <tr>
        <td>height</td>
        <td>走马灯的高度设置</td>
        <td>Number</td>
        <td>-</td>
        <td>300</td>
      </tr>
      <tr>
        <td>changeSpeed</td>
        <td>切换的速度</td>
        <td>Number</td>
        <td>-</td>
        <td>500</td>
      </tr>
      <tr>
        <td>arrow</td>
        <td>左右切换按钮展示方式</td>
        <td>String</td>
        <td>hidden (隐藏), always (一直显示), hover (悬停)</td>
        <td>hover</td>
      </tr>
      <tr>
        <td>pageTheme</td>
        <td>底部指示器的样式</td>
        <td>String</td>
        <td>circle, hidden, square, custom(自定义)</td>
        <td>circle</td>
      </tr>
      <tr>
        <td>isHoverStop</td>
        <td>鼠标悬停走马灯的时候，是否停止滚动</td>
        <td>Boolean</td>
        <td>true,false</td>
        <td>true</td>
      </tr>
      <tr>
        <td>paginationTrigger</td>
        <td>底部指示器的触发方式</td>
        <td>String</td>
        <td>hover, click</td>
        <td>click</td>
      </tr>
      <tr>
        <td>effect</td>
        <td>切换模式</td>
        <td>String</td>
        <td>scroll, fade</td>
        <td>scroll</td>
      </tr>
    </table>

    <h3>Carousel 事件</h3>
    <table class="table">
      <tr>
        <th>事件</th>
        <th>说明</th>
        <th>返回值</th>
      </tr>
      <tr>
        <td>change</td>
        <td>切换轮播</td>
        <td>( index, DataObject )</td>
      </tr>
      <tr>
        <td>click</td>
        <td>点击事件</td>
        <td>( index, DataObject )</td>
      </tr>
    </table>

    <h3>Carousel 方法</h3>
    <table class="table">
      <tr>
        <th>事件</th>
        <th>说明</th>
        <th>参数</th>
      </tr>
      <tr>
        <td>prev</td>
        <td>切换上一张</td>
        <td>prev()</td>
      </tr>
      <tr>
        <td>next</td>
        <td>切换下一张</td>
        <td>next()</td>
      </tr>
    </table>
  </div>
</template>
