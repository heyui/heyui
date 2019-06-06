<template>
  <div class="doc">
    <h2>BackTop</h2>
    <p class="component-name-tip">In non-string templates，it is necessary to use <code>h-backtop</code>. </p>

    <h3>Basic</h3>
    <exampleEn demo="other/backtotop1"></exampleEn>

    <h3>Custom styles and content</h3>
    <exampleEn demo="other/backtotop2"></exampleEn>
    <p>style:</p>
    <codesEn src="/codes/backtop1.txt" type="less"></codesEn>
    <div v-height="10"></div>
    <div v-height="1000" v-bg-color:gray4 v-padding="20" class="text-center">
      Support page
    </div>

    <h3>BackTop Property</h3>
    <table class="table">
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional</th>
        <th>Default</th>
      </tr>
      <tr>
        <td>target</td>
        <td>Targeted object</td>
        <td>Function</td>
        <td>-</td>
        <td>window.document</td>
      </tr>
      <tr>
        <td>bottom</td>
        <td>Displacement at the bottom</td>
        <td>Number</td>
        <td>-</td>
        <td>50</td>
      </tr>
      <tr>
        <td>right</td>
        <td>Displacement on the right</td>
        <td>Number</td>
        <td>-</td>
        <td>50</td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  data() {
    return {
    };
  },
  methods: {
    getTarget() {
      return document.querySelector('.right-frame');
    }
  }
};
</script>
