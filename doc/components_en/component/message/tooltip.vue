<template>
  <div class="doc">
    <h2>Tooltip</h2>
    <blockquote>Note: if tooltip is on the right side of the page and the display is abnormal, please use the style to set the fixed width for the content.</blockquote>
    <blockquote>Note: If you use tooltip as the editing module, add the parameter editable. The normal z-index attribute of tooltip is higher than the edited tooltip module.</blockquote>
    <h3>Basic</h3>
    <exampleEn demo="message/tooltip1"></exampleEn>

    <h3>Tips for different locations</h3>
    <exampleEn demo="message/tooltip2"></exampleEn>

    <h3>Triggered by a click</h3>
    <exampleEn demo="message/tooltip3"></exampleEn>

    <h3>Custom content</h3>
    <exampleEn demo="message/tooltip4"></exampleEn>

    <h3>Custom style</h3>
    <exampleEn demo="message/tooltip5"></exampleEn>

    <h3>Tooltip Property</h3>
    <table class="table">
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional</th>
        <th>Default</th>
      </tr>
      <tr>
        <td>content</td>
        <td>show content</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>placement</td>
        <td>The direction of the prompt</td>
        <td>String</td>
        <td>-</td>
        <td>top, top-start, top-end, bottom, bottom-start, bottom-end, left, left-start, left-end, right, right-start, right-end</td>
      </tr>
      <tr>
        <td>theme</td>
        <td></td>
        <td>String</td>
        <td>white，或者自定义参数</td>
        <td>-</td>
      </tr>
      <tr>
        <td>className</td>
        <td>tooltip add class</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>trigger</td>
        <td>trigger event</td>
        <td>String</td>
        <td>hover, click, focus, manual</td>
        <td>info</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td></td>
        <td>Boolean</td>
        <td></td>
        <td>false</td>
      </tr>
      <tr>
        <td>editable</td>
        <td>edit tooltip, 1.18.0+</td>
        <td>Boolean</td>
        <td></td>
        <td>false</td>
      </tr>
    </table>

    <h3>Tooltip Event</h3>
    <table class="table">
      <tr>
        <th>Event</th>
        <th>Description</th>
        <th>param</th>
      </tr>
      <tr>
        <td>show</td>
        <td>Trigger when tooltip opened</td>
        <td></td>
      </tr>
      <tr>
        <td>hide</td>
        <td>Trigger when tooltip is closed</td>
        <td></td>
      </tr>
    </table>

    <h3>Tooltip Method</h3>
    <table class="table">
      <tr>
        <th>Method</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>show</td>
        <td>show modal</td>
      </tr>
      <tr>
        <td>hide</td>
        <td>hide modal</td>
      </tr>
      <tr>
        <td>update</td>
        <td>update modal position</td>
      </tr>
    </table>
  </div>
</template>
