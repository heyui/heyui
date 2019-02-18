<template>
  <div class="doc">
    <h2>Button</h2>
    <p class="component-name-tip">In non-string templates，it is necessary to use <code>h-button</code>. </p>

    <h3>Component</h3>
    <p>Use basic Button components to implement various button styles.</p>
    <p class="tip">If you need to use special event handler such as <code>stop</code>, please use <code>stop</code> parameter.</p>
    <example demo="basic/button2"></example>

    <h3>Native class</h3>
    <p>Using the basic class to achieve a variety of button styles</p>
    <example demo="basic/button1"></example>

    <h3>class list</h3>
    <table class="table">
      <tr>
        <th>class</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>.h-btn</td>
        <td>Default button style</td>
      </tr>
      <tr>
        <td>.h-btn-{color}</td>
        <td>Button with background color, red,green,blue,yellow,primary</td>
      </tr>
      <tr>
        <td>.h-btn-text-{color}</td>
        <td>Text and border discolored buttons when hovered, red, green, blue, yellow</td>
      </tr>
      <tr>
        <td>.h-btn-circle</td>
        <td>Round button</td>
      </tr>
      <tr>
        <td>.h-btn-icon-circle</td>
        <td>Round icon button</td>
      </tr>
      <tr>
        <td>.h-btn-{size}</td>
        <td>The size of the icon: l, s, xs</td>
      </tr>
      <tr>
        <td>.h-btn-loading</td>
        <td>Loading button</td>
      </tr>
      <tr>
        <td>.h-btn-group</td>
        <td>Button group</td>
      </tr>
      <tr>
        <td>.h-btn-group-circle</td>
        <td>Rounded button set</td>
      </tr>
      <tr>
        <td>.h-btn-group-{size}</td>
        <td>Button group size, l, s, xs</td>
      </tr>
    </table>

    <h3>Button Property</h3>
    <table class="table">
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional</th>
        <th>Default</th>
      </tr>
      <tr>
        <td>color</td>
        <td>Background with colored buttons</td>
        <td>string</td>
        <td>red,green,blue,yellow,primary</td>
        <td>-</td>
      </tr>
      <tr>
        <td>text-color</td>
        <td>text and border discolored buttons when hovered</td>
        <td>string</td>
        <td>red,green,blue,yellow</td>
        <td>-</td>
      </tr>
      <tr>
        <td>circle</td>
        <td>Is it a round border?</td>
        <td>boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>Is it disabled?</td>
        <td>boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>loading</td>
        <td>Whether to load, will overwrite the original icon</td>
        <td>boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>size</td>
        <td>Button size</td>
        <td>string</td>
        <td>l, s, xs</td>
        <td>-</td>
      </tr>
      <tr>
        <td>no-border</td>
        <td>Is there a border</td>
        <td>boolean</td>
        <td>-</td>
        <td>true</td>
      </tr>
      <tr>
        <td>text</td>
        <td>Is it a simple text button?</td>
        <td>boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>icon</td>
        <td>Quote icon</td>
        <td>string</td>
        <td>Actually define an icon of the class, you can also write their own class style</td>
        <td>-</td>
      </tr>
      <tr>
        <td>stop</td>
        <td>click event use stopPropagation</td>
        <td>boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>preventDefault</td>
        <td>click event use preventDefault</td>
        <td>boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
    </table>

    <h3>Button Event</h3>
    <table class="table">
      <tr>
        <th>Event</th>
        <th>Desc</th>
        <th>Return Value</th>
      </tr>
      <tr>
        <td>click</td>
        <td>click event</td>
        <td>Event</td>
      </tr>
    </table>

    <h3>ButtonGroup Property</h3>
    <table class="table">
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional</th>
        <th>Default</th>
      </tr>
      <tr>
        <td>circle</td>
        <td>Is it a round border?</td>
        <td>boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>size</td>
        <td>Button size</td>
        <td>string</td>
        <td>l, s, xs</td>
        <td>-</td>
      </tr>
    </table>
  </div>
</template>