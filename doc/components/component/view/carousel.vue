<template>
  <div class="doc">
    <h2>Carousel 走马灯</h2>

    <h3>普通的Carousel 走马灯</h3>
    <example demo="carousel/carousel1"></example>

    <h3>带arrow 走马灯</h3>
    <example demo="carousel/carousel2"></example>

    <h3>arrow的hover方式 无autoplay走马灯</h3>
    <example demo="carousel/carousel3"></example>

    <h3>loop为false的自定义导航走马灯</h3>
    <example demo="carousel/carousel4"></example>

    <h3>只有一张图的情况,请自定义不需要下标</h3>
    <example demo="carousel/carousel5"></example>

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
        <td>是否自动循环，以毫秒为单位，为0的时候，不循环</td>
        <td>Number</td>
        <td>-</td>
        <td>0</td>
      </tr>
      <tr>
        <td>speed</td>
        <td>滚动的速度,以毫秒为单位</td>
        <td>Number</td>
        <td>-</td>
        <td>300</td>
      </tr>
      <tr>
        <td>arrowType</td>
        <td>左右箭头的样式</td>
        <td>String</td>
        <td>hidden,show,hover</td>
        <td>hidden</td>
      </tr>
      <tr>
        <td>pageTheme</td>
        <td>底部指示器的样式</td>
        <td>String</td>
        <td>circle,hidden,square,custom(自定义)</td>
        <td>circle</td>
      </tr>
      <tr>
        <td>loop</td>
        <td>滚动的方式是否是循环</td>
        <td>Boolean</td>
        <td>true,false</td>
        <td>true</td>
      </tr>
      <tr>
        <td>hoverStop</td>
        <td>鼠标上移的时候，是否停止滚动</td>
        <td>Boolean</td>
        <td>true,false</td>
        <td>true</td>
      </tr>
    </table>

    <h3>Carousel 事件</h3>
    <table class="table">
      <tr>
        <th>事件</th>
        <th>说明</th>
      </tr>
      <tr>
        <td>changePage</td>
        <td>切换幻灯片</td>
      </tr>
      <tr>
        <td>clickPage</td>
        <td>点击轮播到这一张</td>
      </tr>
      <tr>
        <td>clickPrev</td>
        <td>切换至上一张</td>
      </tr>
       <tr>
        <td>clickNext</td>
        <td>切换至下一张</td>
      </tr>
    </table>
  </div>
</template>