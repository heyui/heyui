<template>
  <div class="doc">
    <h2>更新日志</h2>
    <Timeline :time="true">
      <TimelineItem>
        <div slot="time"><p>2017-06-09</p></div>
        <div slot="content">PopTip</div>
      </TimelineItem>
      <TimelineItem>
        <div slot="time"><p>2017-05-26</p></div>
        <div slot="content">table 完善，修复checkbox问题，修复换行引起的高度变化问题</div>
      </TimelineItem>
      <TimelineItem>
        <div slot="time"><p>2017-05-26</p></div>
        <div slot="content">loadingbar</div>
      </TimelineItem>
      <TimelineItem>
        <div slot="time"><p>2017-05-25</p></div>
        <div slot="content">circle, progress</div>
      </TimelineItem>
      <TimelineItem>
        <div slot="time"><p>2017-05-23</p><p>20:32</p></div>
        <div slot="content">Table基础使用</div>
      </TimelineItem>
      <TimelineItem>
        <div slot="time"><p>2017-05-18</p><p>15:30</p></div>
        <div slot="content">Tabs, Panel</div>
      </TimelineItem>
      <TimelineItem>
        <div slot="time"><p>2017-05-15</p><p>15:30</p></div>
        <div slot="content">DropdownMenu, DropdownCustom, Search and demos</div>
      </TimelineItem>
      <TimelineItem>
        <div slot="time"><p>2017-05-11</p><p>15:30</p></div>
        <div slot="content">Badge微标数</div>
      </TimelineItem>
      <TimelineItem>
        <div slot="time"><p>2017-05-08</p><p>15:30</p></div>
        <div slot="content">Tree基本</div>
      </TimelineItem>
      <TimelineItem>
        <div slot="time"><p>2017-05-06</p><p>15:30</p></div>
        <div slot="content">Validation</div>
      </TimelineItem>
      <TimelineItem>
        <div slot="time"><p>2017-05-03</p><p>19:30</p></div>
        <div slot="content">完成Autocomplete。</div>
      </TimelineItem>
      <TimelineItem>
        <div slot="time"><p>2017-04-26</p><p>10:25</p></div>
        <div slot="content">添加单选的多选框，针对 true,false 选择，Radio,Checkbox支持数组定义的datas。</div>
      </TimelineItem>
      <TimelineItem>
        <div slot="time"><p>2017-04-24</p><p>20:34</p></div>
        <div slot="content">补全写完部分的demo</div>
      </TimelineItem>
      <TimelineItem>
        <div slot="time"><p>2017-04-20</p><p>17:59</p></div>
        <div slot="content">Loading</div>
      </TimelineItem>
      <TimelineItem>
        <div slot="time"><p>2017-04-20</p><p>16:00</p></div>
        <div slot="content">添加Dict对应的dictMapping的filter</div>
      </TimelineItem>
      <TimelineItem>
        <div slot="time"><p>2017-04-19</p><p>12:46</p></div>
        <div slot="content">完成Dict字典机制</div>
      </TimelineItem>
      <TimelineItem>
        <div slot="time"><p>2017-04-18</p><p>18:16</p></div>
        <div slot="content">分页控件开发完成</div>
      </TimelineItem>
      <TimelineItem>
        <div slot="time"><p>2017-04-16</p><p>13:58</p></div>
        <div slot="content">时间控件开发完成，start,end</div>
      </TimelineItem>
      <TimelineItem>
        <div slot="time"><p>2017-04-16</p><p>12:17</p></div>
        <div slot="content">日期时间控件开发完成，disabled,format,start,end</div>
      </TimelineItem>
      <TimelineItem>
        <div slot="time"><p>2017-04-15</p><p>18:24</p></div>
        <div slot="content">日期控件基本功能开发完成，disabled,format,start,end,type[date|year|month]</div>
      </TimelineItem>
      <TimelineItem>
        <div slot="time"><p>2017-04-14</p><p>16:51</p></div>
        <div slot="content">Select样式优化</div>
      </TimelineItem>
      <TimelineItem>
        <div slot="time"><p>2017-04-14</p><p>14:01</p></div>
        <div slot="content">Select, Dropdown, Pop</div>
      </TimelineItem>
      <TimelineItem>
        <div slot="time"><p>2017-04-11</p><p>20:01</p></div>
        <div slot="content">Notice</div>
      </TimelineItem>
      <TimelineItem>
        <div slot="time"><p>2017-04-11</p></div>
        <div slot="content">Modal</div>
      </TimelineItem>
      <TimelineItem>
        <div slot="time"><p>2017-04-10</p><p>19:36</p></div>
        <div slot="content">Message</div>
      </TimelineItem>
      <TimelineItem>
        <div slot="time"><p>2017-04-10</p><p>17:23</p></div>
        <div slot="content">Tooltip</div>
      </TimelineItem>
      <TimelineItem color="red">
        <div slot="time"><p>2017-04-09</p><p>07:09</p></div>
        <div slot="content">Form Validation Fix issues. <a href="https://github.com/vuejs/vue/issues/5410" target="_blank">vue issues</a></div>
      </TimelineItem>
      <TimelineItem>
        <div slot="time"><p>2017-04-08</p><p>20:34</p></div>
        <div slot="content">Form</div>
      </TimelineItem>
      <TimelineItem>
        <div slot="time"><p>2017-04-07</p><p>15:19</p></div>
        <div slot="content">Rate</div>
      </TimelineItem>
      <TimelineItem>
        <div slot="time"><p>2017-04-07</p><p>14:45</p></div>
        <div slot="content">SwitchList</div>
      </TimelineItem>
      <TimelineItem>
        <div slot="time"><p>2017-04-07</p><p>11:40</p></div>
        <div slot="content">Switch</div>
      </TimelineItem>
      <TimelineItem>
        <div slot="time"><p>2017-04-06</p><p>17:31</p></div>
        <div slot="content">Checkbox</div>
      </TimelineItem>
      <TimelineItem>
        <div slot="time"><p>2017-04-06</p><p>15:52</p></div>
        <div slot="content">Radio</div>
      </TimelineItem>
      <TimelineItem>
        <div slot="time"><p>2017-04-06</p><p>13:59</p></div>
        <div slot="content">Input, Textarea</div>
      </TimelineItem>
      <TimelineItem>
        <div slot="time"><p>2017-04-05</p><p>21:41</p></div>
        <div slot="content">Button</div>
      </TimelineItem>
      <TimelineItem>
        <div slot="time"><p>2017-03-31</p><p>16:35</p></div>
        <div slot="content">Extend</div>
      </TimelineItem>
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
        <div slot="content"><a href="http://www.heyui.top" target="_blank">heyui.top</a></div>
      </TimelineItem>
      <TimelineItem>
        <div slot="time"><p>2017-03-22</p></div>
        <div slot="content">hey-cli</div>
      </TimelineItem>
      <TimelineItem icon="h-icon-star" color="green">
        <div slot="time"><p>2017-03-17</p><p>14:56:59</p></div>
        <div slot="content">Initial commit</div>
      </TimelineItem>
    </Timeline>
  </div>
</template>

<script>
