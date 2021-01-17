<template>
  <Timeline :pending="true" :time="true" :time-width="200">
    <TimelineItem>Beijing</TimelineItem>
    <TimelineItem color="green">Changchun</TimelineItem>
    <TimelineItem>
      <i class="h-icon-user primary-color" slot="icon"></i>
      <div slot="time">2012-12-23</div>
      <div slot="content">Arriving at Hulunbuir</div>
    </TimelineItem>
    <TimelineItem icon="h-icon-task">
      <div slot="time">
        <p>2012-12-23</p>
        <p>sunny</p>
      </div>
      <div slot="content">Mongolian grassland</div>
    </TimelineItem>
    <TimelineItem icon="h-icon-complete" color="green">
      <div slot="time">
        <p>2012-12-23</p>
        <p>Light rain</p>
      </div>
      <div slot="content">
        <p v-font="18">Spring night, Los Angeles smells the flute</p>
        <p class="gray-color">Who is the jade flute?</p>
        <p class="gray-color">Scattered into the spring breeze</p>
        <p class="gray-color">This night song</p>
        <p class="gray-color">Who can't afford the situation?</p>
      </div>
    </TimelineItem>
    <TimelineItem>
      <a href>load more</a>
    </TimelineItem>
  </Timeline>
</template>
