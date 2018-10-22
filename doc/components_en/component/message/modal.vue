<template>
  <div class="doc">
    <h2>Modal</h2>

    <h3>Js call</h3>
    <h4>Use method call Confirm</h4>
    <example demo="message/modal5"></example>

    <h4>Use method to call Modal</h4>
    <example demo="message/modal6"></example>

    <h4>Use method to define full-screen Modal</h4>
    <example demo="message/modal12"></example>

    <h4>Use method to define complex Modal</h4>
    <example demo="message/modal7"></example>

    <h3>Modal Component</h3>
    <h3>Basic</h3>
    <example demo="message/modal1"></example>

    <h3>Customized modal</h3>
    <example demo="message/modal10"></example>

    <h3>Maskless modal</h3>
    <example demo="message/modal2"></example>

    <h3>Click mask cannot be closed</h3>
    <example demo="message/modal3"></example>

    <h4>Open vertical center modal</h4>
    <example demo="message/modal4"></example>

    <h4>Divider line modal</h4>
    <example demo="message/modal9"></example>

    <h4>Open full-screen Modal</h4>
    <example demo="message/modal13"></example>

    <h3>modal component use component content</h3>
    <p>In system development, we often use new, editing and other functional and highly reusable modules. Here we provide modal component-based calls to help with better development.</p>
    <example demo="message/modal8"></example>

    <h3>modal js use component content</h3>
    <p>Use js to call the pop-up component Modal, which not only facilitates the use of parameters, but also integrates calls to js code.</p>
    <blockquote>The components used in the popup box are the same as the components called by Vue above, and both methods are compatible.</blockquote>
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
        <td>content</td>
        <td>content</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>width</td>
        <td>Set the width</td>
        <td>Number</td>
        <td>-</td>
        <td></td>
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
        <td>buttons</td>
        <td>Set the bottom buttons</td>
        <td>Array</td>
        <td>-</td>
        <td>['cancel']</td>
      </tr>
      <tr>
        <td>events</td>
        <td>Event listener</td>
        <td>Object</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>className</td>
        <td>class name</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
    </table>
  </div>
</template>