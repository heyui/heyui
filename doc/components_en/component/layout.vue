<template>
  <div class="doc">
    <h2>Layout</h2>
    <blockquote>1.14.0+</blockquote>
    <p class="component-name-tip">In non-string templates，it is necessary to use <code>h-layout</code>, <code>h-header</code>, <code>h-footer</code>, <code>h-content</code>, <code>h-sider</code>. </p>

    <h3>Overview of Components</h3>
    <p>Components are configured in <code>var.less</code> with three sizes:</p>
    <ul class="text-ul">
      <li><code>@layout-header-height</code>: The height of the header, default value: 64px</li>
      <li><code>@layout-sider-width</code>: Sider width, default value: 200px</li>
      <li><code>@layout-sider-collapse-width</code>: The width that Sider collapsed, default value: 70px</li>
    </ul>
    <p>Users can modify these three dimensions through their own design requirements，<code>var.less</code>：<a href="https://github.com/heyui/heyui/blob/master/themes/var.less" target="_blank">Link</a></p>

    <h3>Basic</h3>
    <exampleEn demo="basic/layout1"></exampleEn>

    <h3>Top, middle and bottom layout</h3>
    <exampleEn demo="basic/layout2" iframe></exampleEn>

    <h3>Top, left and right layout</h3>
    <exampleEn demo="basic/layout3" iframe></exampleEn>

    <h3>Left, top and bottom layout</h3>
    <exampleEn demo="basic/layout4" iframe></exampleEn>

    <h3>Layout Property</h3>
    <table class="table">
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional</th>
        <th>Default</th>
      </tr>
      <tr>
        <td>headerFixed</td>
        <td>Whether fixed head</td>
        <td>Boolean</td>
        <td>false</td>
        <td>-</td>
      </tr>
      <tr>
        <td>siderFixed</td>
        <td>Whether fixed sider</td>
        <td>Boolean</td>
        <td>false</td>
        <td>-</td>
      </tr>
      <tr>
        <td>siderCollapsed</td>
        <td>Whether collapsed head</td>
        <td>Boolean</td>
        <td>false</td>
        <td>-</td>
      </tr>
    </table>

    <h3>Header Property</h3>
    <table class="table">
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional</th>
        <th>Default</th>
      </tr>
      <tr>
        <td>theme</td>
        <td></td>
        <td>String</td>
        <td></td>
        <td>white, dark</td>
      </tr>
    </table>

    <h3>Sider Property</h3>
    <table class="table">
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional</th>
        <th>Default</th>
      </tr>
      <tr>
        <td>theme</td>
        <td></td>
        <td>String</td>
        <td></td>
        <td>white, dark</td>
      </tr>
    </table>
  </div>
</template>
