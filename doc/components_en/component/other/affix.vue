<template>
  <div class="doc">
    <h2>affix</h2>

    <example demo="other/affix1"></example>
    <div v-height="1000" v-bg-color:gray4 v-padding="20" class="text-center">
      Support page
    </div>
    <example demo="other/affix2"></example>
    
    <h3>Fixed in the container</h3>
    <p>If you encounter a fixed dom higher than the container, be sure to add style overflow: hidden;</p>
    <example demo="other/affix3"></example>
    
    <h3>affix 参数</h3>
    <table class="table">
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional</th>
        <th>Default</th>
      </tr>
      <tr>
        <td>offsetTop</td>
        <td>Positioning after reaching the specified offset at the top of the window</td>
        <td>Number</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>offsetBottom</td>
        <td>Positioning after reaching the specified offset from the bottom of the window</td>
        <td>Number</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>fixedOffsetTop</td>
        <td>Positioning after reaching the specified offset from the top of the page</td>
        <td>Number</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>container</td>
        <td>Use the positioning in the container</td>
        <td>Function</td>
        <td>-</td>
        <td>-</td>
      </tr>
    </table>


    <h3>affix Event</h3>
    <table class="table">
      <tr>
        <th>Event</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>onchange</td>
        <td>This method is triggered when the fixed state changes.</td>
      </tr>
    </table>

    <h3>affix Method</h3>
    <table class="table">
      <tr>
        <th>Method</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>refresh</td>
        <td>Undetected page changes, need to refresh the location of affix components</td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  data() {
    return {
      fixed: false
    }
  },
  methods: {
  }
}
</script>
