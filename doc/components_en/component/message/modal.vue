<template>
  <div class="doc">
    <h2>Modal</h2>

    <h3>Confirm</h3>
    <!-- <h4>使用方法调用Confirm</h4> -->
    <example demo="message/modal5"></example>

    <h3>Basic</h3>
    <example demo="message/modal6"></example>

    <h3>Custom Modal</h3>
    <example demo="message/modal14"></example>

    <h3>Fullscreen modal</h3>
    <example demo="message/modal12"></example>

    <h3>Define buttons</h3>
    <example demo="message/modal7"></example>

    <h3>Click mask cannot be closed</h3>
    <example demo="message/modal3"></example>

    <h3>Vertical center modal</h3>
    <example demo="message/modal4"></example>

    <h3>Maskless modal</h3>
    <example demo="message/modal2"></example>

    <h3>Divider line modal</h3>
    <example demo="message/modal9"></example>

    <h3>use component content</h3>
    <p>Use js to call the pop-up component Modal, which not only facilitates the use of parameters, but also integrates calls to js code.</p>
    <example demo="message/modal11"></example>
    
    <blockquote>The code used in the popup box</blockquote>
    <codes src="/message/modalTest.vue" type="html"></codes>


    <h3>Modal Property</h3>
    <table class="table">
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional</th>
        <th>Default</th>
      </tr>
      <tr>
        <td>hasCloseIcon</td>
        <td>Has close Icon</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>hasMask</td>
        <td>Is there a mask layer</td>
        <td>Boolean</td>
        <td>-</td>
        <td>true</td>
      </tr>
      <tr>
        <td>hasDivider</td>
        <td>Is there a line division head and tail?</td>
        <td>Boolean</td>
        <td>-</td>
        <td>Configure <code>modal.hasDivider</code></td>
      </tr>
      <tr>
        <td>closeOnMask</td>
        <td>Whether to click on the mask layer off modal</td>
        <td>Boolean</td>
        <td>-</td>
        <td>true</td>
      </tr>
      <tr>
        <td>middle</td>
        <td>Whether vertical centering display</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>fullScreen</td>
        <td>Whether full screen</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>transparent</td>
        <td>Whether background transparent</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>className</td>
        <td>class name</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>type</td>
        <td>self defined type</td>
        <td>String</td>
        <td>-</td>
        <td>['drawer-right','drawer-left']</td>
      </tr>
      <tr>
        <td>buttons</td>
        <td>init buttons, only for js</td>
        <td>Array</td>
        <td>-</td>
        <td>['cancel']</td>
      </tr>
      <tr>
        <td>content</td>
        <td>setting modal content, only for js</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>width</td>
        <td>set modal width, only for js</td>
        <td>Number</td>
        <td>-</td>
        <td></td>
      </tr>
      <tr>
        <td>events</td>
        <td>event listener, only for js</td>
        <td>Object</td>
        <td>-</td>
        <td>-</td>
      </tr>
    </table>
  </div>
</template>