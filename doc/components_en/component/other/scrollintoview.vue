<template>
  <div class="doc">
    <h2>ScrollIntoView</h2>

    <h3>Basic</h3>
    <exampleEn demo="other/scrollintoview1"></exampleEn>

    <codesEn type="javascript">scrollIntoView(someElement, {
  time: 500, // half a second
  align:{
    top: 0 to 1, // default 0.5 (center)
    left: 0 to 1, // default 0.5 (center)
    topOffset: 0, // pixels to offset top alignment
    leftOffset: 0, // pixels to offset left alignment
  },
  isScrollable: function(target, defaultIsScrollable){
    // Determines whether objects can be scrolled against a multi-layer scroll parent layer.
    return defaultIsScrollable(target) || ~target.className.indexOf('scrollable');
  }
});</codesEn>

    <h3>ScrollIntoView Property</h3>
    <table class="table">
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional</th>
        <th>Default</th>
      </tr>
      <tr>
        <td>time</td>
        <td>Time of displacement consumption</td>
        <td>Number</td>
        <td>-</td>
        <td>0</td>
      </tr>
      <tr>
        <td>align</td>
        <td>Location, including top, topOffset</td>
        <td></td>
        <td>-</td>
        <td></td>
      </tr>
      <tr>
        <td>isScrollable</td>
        <td>Determines whether objects can be scrolled against a multi-layer scroll parent layer.</td>
        <td></td>
        <td>-</td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
