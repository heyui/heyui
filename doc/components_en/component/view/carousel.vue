<template>
  <div class="doc">
    <h2>Carousel</h2>
    <p class="component-name-tip">In non-string templates，it is necessary to use <code>h-carousel</code>.</p>
    <blockquote>1.10.0+</blockquote>

    <h3>Basic</h3>
    <exampleEn demo="carousel/carousel2"></exampleEn>

    <h3>Params</h3>
    <exampleEn demo="carousel/carousel1"></exampleEn>

    <!-- <h3>带arrow 走马灯</h3>
    <exampleEn demo="carousel/carousel2"></exampleEn>

    <h3>arrow的hover方式 无autoplay走马灯</h3>
    <exampleEn demo="carousel/carousel3"></exampleEn>

    <h3>loop为false的自定义导航走马灯</h3>
    <exampleEn demo="carousel/carousel4"></exampleEn>

    <h3>只有一张图的情况,请自定义不需要下标</h3>
    <exampleEn demo="carousel/carousel5"></exampleEn> -->

    <h3>Carousel Property</h3>
    <table class="table">
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional</th>
        <th>Default</th>
      </tr>
      <tr>
        <td>autoplay</td>
        <td>It will be autoplay</td>
        <td>Boolean</td>
        <td>-</td>
        <td>true</td>
      </tr>
      <tr>
        <td>speed</td>
        <td>The time of automatic cycle is in milliseconds.</td>
        <td>Number</td>
        <td>-</td>
        <td>3000</td>
      </tr>
      <tr>
        <td>height</td>
        <td></td>
        <td>Number</td>
        <td>-</td>
        <td>300</td>
      </tr>
      <tr>
        <td>changeSpeed</td>
        <td></td>
        <td>Number</td>
        <td>-</td>
        <td>500</td>
      </tr>
      <tr>
        <td>arrow</td>
        <td></td>
        <td>String</td>
        <td>hidden (隐藏), always (一直显示), hover (悬停)</td>
        <td>hover</td>
      </tr>
      <tr>
        <td>pageTheme</td>
        <td>Style of bottom pagination</td>
        <td>String</td>
        <td>circle, hidden, square, custom(自定义)</td>
        <td>circle</td>
      </tr>
      <tr>
        <td>isHoverStop</td>
        <td>Does the mouse stop rolling when it hovers at the lantern?</td>
        <td>Boolean</td>
        <td>true,false</td>
        <td>true</td>
      </tr>
      <tr>
        <td>paginationTrigger</td>
        <td>Trigger of bottom pagination</td>
        <td>String</td>
        <td>hover, click</td>
        <td>click</td>
      </tr>
    </table>

    <h3>Carousel Events</h3>
    <table class="table">
      <tr>
        <th>Event</th>
        <th>Description</th>
        <th>Return</th>
      </tr>
      <tr>
        <td>change</td>
        <td></td>
        <td>( index, DataObject )</td>
      </tr>
      <tr>
        <td>click</td>
        <td></td>
        <td>( index, DataObject )</td>
      </tr>
    </table>

    <h3>Carousel Method</h3>
    <table class="table">
      <tr>
        <th>事件</th>
        <th>说明</th>
        <th>参数</th>
      </tr>
      <tr>
        <td>prev</td>
        <td>change prev page</td>
        <td>prev()</td>
      </tr>
      <tr>
        <td>next</td>
        <td>change next page</td>
        <td>next()</td>
      </tr>
    </table>
  </div>
</template>
