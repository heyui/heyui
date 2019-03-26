<template>
  <div class="doc">
    <h2>ImagePreview</h2>
    <blockquote>$ImagePreview: 1.15.0+, ImagePreview Component: 1.18.0+</blockquote>

    <h3>Basic</h3>
    <exampleEn demo="imagepreview/imagepreview1"></exampleEn>

    <h3>ImagePreview Component</h3>
    <exampleEn demo="imagepreview/imagepreview2"></exampleEn>

    <h3>ImagePreview Method</h3>
    <table class="table">
      <tr>
        <th>Method</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>$ImagePreview</td>
        <td>this.$ImagePreview(urlList:[{url}], index);</td>
      </tr>
    </table>

    <h3>ImagePreview Property</h3>
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
        <td>images</td>
        <td>Array, [{thumbUrl, url}]</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>width</td>
        <td>image width</td>
        <td>Number</td>
        <td>-</td>
        <td>60</td>
      </tr>
      <tr>
        <td>distance</td>
        <td>image distance</td>
        <td>Number</td>
        <td>-</td>
        <td>10</td>
      </tr>
      <tr>
        <td>borderRadius</td>
        <td>image border radius</td>
        <td>Number</td>
        <td>3</td>
        <td></td>
      </tr>
    </table>

    <h3>ImagePreview Event</h3>
    <table class="table">
      <tr>
        <th>Event</th>
        <th>Description</th>
        <th>Data</th>
      </tr>
      <tr>
        <td>click</td>
        <td>click image event</td>
        <td>(index, data)</td>
      </tr>
    </table>
  </div>
</template>
