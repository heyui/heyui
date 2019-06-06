<template>
  <div class="doc">
    <h2>Grid</h2>
    <p>We use standard 24 grid layout containers and use containers to complete a simple network layout.</p>
    <p class="component-name-tip">In non-string templates，it is necessary to use <code>h-row</code>, <code>h-cell</code>. </p>
    <p class="component-name-tip">Since Col and HTML native col tags conflict, after version 1.16.0, Col components are renamed Cell components, and Col components will continue to be compatible.</p>
    <h3>Basic</h3>
    <p>Use component <code>Row</code>,<code>Cell</code>typeset layout, by <code>width</code>setting the width.</p>
    <blockquote>Note: When using non-string mode, please use <code>h-row</code>,<code>h-cell</code>for details, refer to <a href="https://vuejs.org/v2/guide/components-registration.html#Name-Casing" target="_blank">vue component name casing</a></blockquote>
    <exampleEn demo="basic/grid2"></exampleEn>
    <h3>block spacing</h3>
    <p>By add <code>space</code> attributes to<code>Row</code>, let <code>Cell</code> have space. <code>space</code> can be set to any integer value.</p>
    <blockquote>We are not using a grid layout, so we can layout the loop's blocks.</blockquote>
    <exampleEn demo="basic/grid3"></exampleEn>
    <h3>Horizontal, vertical block spacing</h3>
    <p>By add <code>space-x</code>,<code>space-y</code> attributes to<code>Row</code> ，let <code>Cell</code> have space. </p>
    <exampleEn demo="basic/grid4"></exampleEn>
    <h3>Flex layout</h3>
    <p>Flex layout is mainly used in flex adaptive scenes.</p>
    <exampleEn demo="basic/grid5"></exampleEn>
    <h3>Adaptive layout</h3>
    <p>Implement responsive design using five dimensions: xs, sm, md, lg, xl.</p>
    <p>max-768px, 768px, 992px,1200px , min-1800px</p>
    <exampleEn demo="basic/grid6"></exampleEn>
    <h3>Row Property</h3>
    <table class="table">
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional</th>
        <th>Default</th>
      </tr>
      <tr>
        <td>type</td>
        <td>mode</td>
        <td>string</td>
        <td>flex</td>
        <td>-</td>
      </tr>
      <tr>
        <td>space</td>
        <td>Grid spacing</td>
        <td>number</td>
        <td>-</td>
        <td>0</td>
      </tr>
      <tr>
        <td>space-x</td>
        <td>Horizontal grid spacing</td>
        <td>number</td>
        <td>-</td>
        <td>0</td>
      </tr>
      <tr>
        <td>space-y</td>
        <td>Vertical grid spacing</td>
        <td>number</td>
        <td>-</td>
        <td>0</td>
      </tr>
      <tr>
        <td>direction</td>
        <td>Flex layout block direction</td>
        <td>string</td>
        <td>row, column, row-reverse, column-reverse</td>
        <td>row</td>
      </tr>
      <tr>
        <td>justify</td>
        <td>Flex layout block justify</td>
        <td>string</td>
        <td>start, end, center, space-around, space-between</td>
        <td>start</td>
      </tr>
      <tr>
        <td>align</td>
        <td>Flex layout block alignment</td>
        <td>string</td>
        <td>top, middle, bottom</td>
        <td>top</td>
      </tr>
    </table>

    <h3>Cell Property</h3>
    <table class="table">
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional</th>
        <th>Default</th>
      </tr>
      <tr>
        <td>width</td>
        <td>proportion</td>
        <td>number</td>
        <td>1 to 24</td>
        <td>-</td>
      </tr>
      <tr>
        <td>flex</td>
        <td>Flex mode flex value</td>
        <td>number</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>xs</td>
        <td>Large-screen display ratio in adaptive mode</td>
        <td>number</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>sm</td>
        <td>Large and medium screen display ratio in adaptive mode</td>
        <td>number</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>md</td>
        <td>Small and medium screen display ratio in adaptive mode</td>
        <td>number</td>
        <td>-</td>
        <td>r-w</td>
      </tr>
      <tr>
        <td>lg</td>
        <td>Small screen display ratio in adaptive mode</td>
        <td>number</td>
        <td>-</td>
        <td>-</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
  components: {}
};
</script>
