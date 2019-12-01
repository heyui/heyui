<template>
  <div class="doc">
    <h2>Avatar</h2>
    <blockquote>1.13.0+</blockquote>
    <p class="component-name-tip">In non-string templates，it is necessary to use <code>h-avatar</code>. </p>

    <h3>Basic</h3>
    <exampleEn demo="view/avatar1"></exampleEn>

    <h3>Setting up different usages</h3>
    <example demo="view/avatar3"></example>

    <h3>Shape and type</h3>
    <p>When some users do not have image information, they can display the default image.</p>
    <example demo="view/avatar2"></example>

    <h3>Avatar Property</h3>
    <table class="table">
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional</th>
        <th>Default</th>
      </tr>
      <tr>
        <td>src</td>
        <td>image src</td>
        <td>String</td>
        <td>-</td>
        <td></td>
      </tr>
      <tr>
        <td>width</td>
        <td>image size</td>
        <td>Number</td>
        <td>-</td>
        <td>50</td>
      </tr>
      <tr>
        <td>distance</td>
        <td>distance of image and text</td>
        <td>Number</td>
        <td>-</td>
        <td>15</td>
      </tr>
      <tr>
        <td>imageTop</td>
        <td>set image top</td>
        <td>Number</td>
        <td>if not set, image will vertical middle</td>
        <td></td>
      </tr>
      <tr>
        <td>type</td>
        <td>different type</td>
        <td>String</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>fit</td>
        <td>Show the adaptation type with different pictures</td>
        <td>String</td>
        <td></td>
        <td>fill, contain, cover, none</td>
      </tr>
      <tr>
        <td>noInfo</td>
        <td>No description information is displayed</td>
        <td>Boolean</td>
        <td></td>
        <td>false</td>
      </tr>
    </table>

    <h3>Avatar Event</h3>
    <table class="table">
      <tr>
        <th>Event</th>
        <th>Description</th>
        <th>Data</th>
      </tr>
      <tr>
        <td>click</td>
        <td>click avatar event</td>
        <td>data</td>
      </tr>
    </table>

  </div>
</template>
