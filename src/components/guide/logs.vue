<template>
  <div class="doc">
    <h2>更新日志</h2>
    <Timeline :time="true">
      <TimelineItem>
        <div slot="time"><p>2017-03-31</p></div>
        <div slot="content">Timeline</div>
      </TimelineItem>
      <TimelineItem>
        <div slot="time"><p>2017-03-30</p></div>
        <div slot="content">Icon</div>
      </TimelineItem>
      <TimelineItem>
        <div slot="time"><p>2017-03-29</p></div>
        <div slot="content">Color</div>
      </TimelineItem>
      <TimelineItem>
        <div slot="time"><p>2017-03-28</p></div>
        <div slot="content">Grid</div>
      </TimelineItem>
      <TimelineItem>
        <div slot="time"><p>2017-03-24</p></div>
        <div slot="content">heyui.top</div>
      </TimelineItem>
      <TimelineItem>
        <div slot="time"><p>2017-03-22</p></div>
        <div slot="content">hey-cli</div>
      </TimelineItem>
      <TimelineItem icon="star" color="green">
        <div slot="time"><p>2017-03-17</p><p>14:56:59</p></div>
        <div slot="content">Initial commit</div>
      </TimelineItem>
    </Timeline>
  </div>
</template>

<script>
