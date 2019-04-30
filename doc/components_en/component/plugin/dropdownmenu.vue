<template>
  <div class="doc">
    <h2>DropdownMenu 下拉菜单</h2>
    <p>DropdownMenu can add custom <code>className</code>drop-down controls that define various modes that <code>className</code> will be applied <code>.h-dropdownmenu-show</code>. The dom is the element that triggers the drop-down, contains the custom content, and the icon for the right-hand display state.</p>
    <p>Tip: The system comes with a <code>h-text-dropdown</code> class.</p>
    <p>Note: if DropdownMenu is on the right side of the page and the display is abnormal, please set the width for the content.</p>
    <p>Note: Because the style is applied to the component <code>vue</code>, <code>style</code> with <code>scope</code> properties in the calling file will be invalid.</p>

    <p class="component-name-tip">In non-string templates，it is necessary to use <code>h-dropdownmenu</code>. </p>

    <h3>Basic</h3>
    <exampleEn demo="plugins/dropdownmenu1"></exampleEn>

    <h3>Different style</h3>
    <exampleEn demo="plugins/dropdownmenu2"></exampleEn>

    <h3>Combination</h3>
    <exampleEn demo="plugins/dropdownmenu9"></exampleEn>

    <h3>Different positions</h3>
    <p><code>placement</code>: top, top-start, top-end, bottom, bottom-start, bottom-end, left, left-start, left-end, right, right-start, right-end</p>
    <exampleEn demo="plugins/dropdownmenu3"></exampleEn>

    <h3>Different trigger methods</h3>
    <p><code>trigger</code>: hover, click</p>
    <exampleEn demo="plugins/dropdownmenu4"></exampleEn>

    <h3>Right-click trigger</h3>
    <p><code>trigger</code>: contextMenu</p>
    <exampleEn demo="plugins/dropdownmenu10"></exampleEn>

    <h3>Do not add the right icon by default</h3>
    <exampleEn demo="plugins/dropdownmenu5"></exampleEn>

    <h3>Same width as dom</h3>
    <exampleEn demo="plugins/dropdownmenu6"></exampleEn>

    <h3>Custom width</h3>
    <exampleEn demo="plugins/dropdownmenu7"></exampleEn>

    <h3>Add unread</h3>
    <exampleEn demo="plugins/dropdownmenu8"></exampleEn>

    <h3>Custom style</h3>
    <exampleEn demo="plugins/dropdownmenu11"></exampleEn>

    <h3>DropdownMenu Property</h3>
    <table class="table">
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional</th>
        <th>Default</th>
      </tr>
      <tr>
        <td>datas</td>
        <td>datas</td>
        <td>Array, Object</td>
        <td>-</td>
        <td></td>
      </tr>
      <tr>
        <td>dict</td>
        <td>use the globally defined dictionary</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>trigger</td>
        <td>Trigger method</td>
        <td>String</td>
        <td>click, hover, focus, contextMenu, manual</td>
        <td>click</td>
      </tr>
      <tr>
        <td>equalWidth</td>
        <td>Whether the width of the dom is equal to the trigger</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td></td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>toggleIcon</td>
        <td>Whether to show the display status icon</td>
        <td>Boolean</td>
        <td>-</td>
        <td>true</td>
      </tr>
      <tr>
        <td>width</td>
        <td>Custom menu width</td>
        <td>Number</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>placement</td>
        <td>Menu display position</td>
        <td>Stirng</td>
        <td>
          top, top-start, top-end, <br/>
          bottom, bottom-start, bottom-end, <br/>
          left, left-start, left-end, <br/>
          right, right-start, right-end
        </td>
        <td>bottom-start</td>
      </tr>
      <tr>
        <td>showCount</td>
        <td>Menu whether to display the number of unread flags</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>maxCount</td>
        <td>Maximum number of unread flags</td>
        <td>Number</td>
        <td>-</td>
        <td>99</td>
      </tr>
      <tr>
        <td>className</td>
        <td>Add a class for the click-triggered dom</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>offset</td>
        <td>Displacement</td>
        <td>String, Number</td>
        <td>-</td>
        <td>
          <div>left, top</div>
          <div>10</div>
          <div>'10%'</div>
          <div>'10, 10'</div>
          <div>'10%, 10'</div>
          <div>'10 + 10%'</div>
          <div>'10 - 5vh + 3%'</div>
          <div>'-10px + 5vh, 5px - 6%'</div>
        </td>
      </tr>
      <tr>
        <td>keyName</td>
        <td>Key field name for data</td>
        <td>String</td>
        <td>-</td>
        <td>config <code>dict.keyName</code></td>
      </tr>
      <tr>
        <td>titleName</td>
        <td>title field name for data</td>
        <td>String</td>
        <td>-</td>
        <td>config <code>dict.titleName</code></td>
      </tr>
      <tr>
        <td>button</td>
        <td>Use button style</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
    </table>

    <h3>DropdownMenu Method</h3>
    <table class="table">
      <tr>
        <th>Method</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>show</td>
        <td>Show dropdown</td>
      </tr>
      <tr>
      <td>update</td>
        <td>Update the location of the dropdown</td>
      </tr>
      <tr>
        <td>hide</td>
        <td>Turn off dropdown</td>
      </tr>
    </table>

    <h3>DropdownMenu Event</h3>
    <table class="table">
      <tr>
        <th>Event</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>click</td>
        <td>Triggered when clicked</td>
      </tr>
      <tr>
        <td>show</td>
        <td>Triggered when opened</td>
      </tr>
      <tr>
        <td>hide</td>
        <td>Triggered when closed</td>
      </tr>
    </table>

  </div>
</template>
