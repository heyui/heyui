<template>
  <div class="doc">
    <h2>DropdownCustom</h2>
    <p>DropdownCustom can add custom <code>className</code>drop-down controls that define various modes that <code>className</code> will be applied <code>.h-dropdowncustom-show</code>. The dom is the element that triggers the drop-down, contains the custom content, and the icon for the right-hand display state.</p>
    <p>Tip: The system comes with a <code>h-text-dropdown</code> class.</p>
    <p>Note: if DropdownCustom is on the right side of the page and the display is abnormal, please set the width for the content.</p>
    <p>Note: Because the style is applied to the component <code>vue</code>, <code>style</code> with <code>scope</code> properties in the calling file will be invalid.</p>

    <p class="component-name-tip">In non-string templates，it is necessary to use <code>h-dropdowncustom</code>. </p>

    <h3>Basic</h3>
    <exampleEn demo="plugins/dropdowncustom1"></exampleEn>

    <h3>Different style</h3>
    <exampleEn demo="plugins/dropdowncustom2"></exampleEn>

    <h3>Whether to show the switch icon</h3>
    <exampleEn demo="plugins/dropdowncustom3"></exampleEn>

    <h3>Content display location</h3>
    <p><code>placement</code>: top, top-start, top-end, bottom, bottom-start, bottom-end, left, left-start, left-end, right, right-start, right-end</p>
    <exampleEn demo="plugins/dropdowncustom4"></exampleEn>

    <h3>Custom content location</h3>
    <p>Separately control the displacement of left, top.</p>
    <exampleEn demo="plugins/dropdowncustom6"></exampleEn>

    <h3>Right click trigger frame</h3>
    <exampleEn demo="plugins/dropdowncustom7"></exampleEn>

    <h3>Custom drop control</h3>
    <exampleEn demo="plugins/dropdowncustom5"></exampleEn>

    <h3>DropdownCustom Property</h3>
    <table class="table">
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional</th>
        <th>Default</th>
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
        <td>button</td>
        <td>Use button style</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
    </table>

    <h3>DropdownCustom Method</h3>
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

    <h3>DropdownCustom Event</h3>
    <table class="table">
      <tr>
        <th>Event</th>
        <th>Description</th>
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

<script>

export default {
  data() {
    return {
    };
  },
  methods: {
  },
  components: {
  }
};
</script>
