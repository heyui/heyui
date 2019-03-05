<template>
  <div class="doc">
    <h2>Pagination</h2>
    <p class="component-name-tip">In non-string templates，it is necessary to use <code>h-pagination</code>. </p>
    <h3>Basic</h3>
    <div>
      <exampleEn demo="dataview/pagination1"></exampleEn>
    </div>
    <h3>Mini</h3>
    <div>
      <exampleEn demo="dataview/pagination2"></exampleEn>
    </div>
    <h3>Custom</h3>
    <p>The paging control consists of four parts: <code>total</code>,<code>sizes</code>,<code>pager</code>,<code>jumper</code>, custom <code>layout</code> attribute definition components, and sort order.</p>
    <div>
      <exampleEn demo="dataview/pagination3"></exampleEn>
    </div>
    <h3>Custom example</h3>
    <div>
      <exampleEn demo="dataview/pagination4"></exampleEn>
    </div>
    <h3>Center alignment</h3>
    <div>
      <exampleEn demo="dataview/pagination5"></exampleEn>
    </div>
    <h3>Right alignment</h3>
    <div>
      <exampleEn demo="dataview/pagination6"></exampleEn>
    </div>

    <h3>Pagination Property</h3>
    <table class="table">
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional</th>
        <th>Default</th>
      </tr>
      <tr>
        <td>size</td>
        <td>Per page</td>
        <td>Number</td>
        <td>-</td>
        <td>Global configuration size</td>
      </tr>
      <tr>
        <td>sizes</td>
        <td>Page count selector</td>
        <td>Array</td>
        <td>-</td>
        <td>Global configuration sizes, 例：[10, 20, 50, 100]</td>
      </tr>
      <tr>
        <td>align</td>
        <td>Arrange direction</td>
        <td>String</td>
        <td>left,center,right</td>
        <td>left</td>
      </tr>
      <tr>
        <td>cur</td>
        <td>current page</td>
        <td>Number</td>
        <td>-</td>
        <td>1</td>
      </tr>
      <tr>
        <td>total</td>
        <td>Total number</td>
        <td>Number</td>
        <td>-</td>
        <td>0</td>
      </tr>
      <tr>
        <td>small</td>
        <td>mini size</td>
        <td>Boolean</td>
        <td>-</td>
        <td>Global configuration small</td>
      </tr>
      <tr>
        <td>layout</td>
        <td>Pager layout</td>
        <td>String</td>
        <td>total,pager,jumper,sizes</td>
        <td>Global configuration layout</td>
      </tr>
      <tr>
        <td>pagerSize</td>
        <td>How many pagers appear in total</td>
        <td>Number</td>
        <td>-</td>
        <td>5</td>
      </tr>
    </table>
  </div>
</template>
