<template>
  <Timeline :pending='true' :time="true" :time-width="200">
    <TimelineItem>
      北京
    </TimelineItem>
    <TimelineItem color="green">
      长春
    </TimelineItem>
    <TimelineItem>
      <i class="h-icon-user primary-color" slot="icon"></i>
      <div slot="time">2012-12-23</div>
      <div slot="content">到达呼伦贝尔</div>
    </TimelineItem>
    <TimelineItem icon="h-icon-task">
      <div slot="time">
        <p>2012-12-23</p>
        <p>天气晴</p>
      </div>
      <div slot="content">蒙古的草原</div>
    </TimelineItem>
    <TimelineItem icon="h-icon-complete" color="green">
      <div slot="time">
        <p>2012-12-23</p>
        <p>小雨</p>
      </div>
      <div slot="content">
        <p v-font='18'>春夜洛城闻笛</p>
        <p class="gray-color">谁家玉笛暗飞声</p>
        <p class="gray-color">散入春风满洛城</p>
        <p class="gray-color">此夜曲中闻折柳</p>
        <p class="gray-color">何人不起故园情</p>
      </div>
    </TimelineItem>
    <TimelineItem>
      <a href="">加载更多</a>
    </TimelineItem>
  </Timeline>
</template>
