<template>
  <div class="doc">
    <h2>Form</h2>
    <p class="component-name-tip">In non-string templates，it is necessary to use <code>h-form</code>. </p>
    <h3>Basic</h3>
    <exampleEn demo="form/form1"></exampleEn>

    <h3>Three types of layout and verification</h3>
    <p>The Form provides four sorts of arrangement: </p>
    <ul>
      <li><code>block</code>: one row of FormItem, one row of title</li>
      <li><code>single</code>: one row of FormItem</li>
      <li><code>twocolumn</code>: one row of two FormItems</li>
      <li><code>threecolumn</code>: one row of three FormItems</li>
    </ul>
    <p>In the arrangement mode of <code>twocolumn</code> or <code>threecolumn</code>, adding <code>single</code> parameters on <code>FormItem</code>can be listed as a row.</p>
    <blockquote>Note: When using a <code>for</code>looping component, you have to add <code>key</code> on <code>FormItem</code> component, It prevents <code>FormItem</code> from using key as a unique value reference in the same parent.</blockquote>
    <exampleEn demo="form/form3"></exampleEn>

    <h3>Parameter required setting</h3>
    <exampleEn demo="form/form5"></exampleEn>

    <h3>Call the verification method</h3>
    <exampleEn demo="form/form6"></exampleEn>

    <h3>Readonly</h3>
    <exampleEn demo="form/form2"></exampleEn>

    <h3>Change password verification</h3>
    <exampleEn demo="form/form4"></exampleEn>

    <h3>Form Property</h3>
    <table class="table">
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional</th>
        <th>Default</th>
      </tr>
      <tr>
        <td>mode</td>
        <td>Typesetting mode</td>
        <td>String</td>
        <td>inline,single,twocolumn</td>
        <td>single</td>
      </tr>
      <tr>
        <td>model</td>
        <td>Associated model model for data validator. Details to <a href="https://github.com/heyui/hey-validator" target="_blank">hey-validator</a></td>
        <td>Object</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>labelWidth</td>
        <td>Descriptive text width</td>
        <td>Number</td>
        <td>-</td>
        <td>80</td>
      </tr>
      <tr>
        <td>readonly</td>
        <td>Readonly</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>rules</td>
        <td>Data validator rules. Details to <a href="https://github.com/heyui/hey-validator" target="_blank">hey-validator</a></td>
        <td>Object</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>labelPosition</td>
        <td>Descriptive text position</td>
        <td>String</td>
        <td>left,right</td>
        <td>right</td>
      </tr>
      <tr>
        <td>top</td>
        <td>Sliding to the wrong input at the wrong time</td>
        <td>Number</td>
        <td>0-1，百分比</td>
        <td>0.5</td>
      </tr>
      <tr>
        <td>topOffset</td>
        <td>The height of the error when sliding to the wrong input</td>
        <td>Number</td>
        <td>-</td>
        <td>0</td>
      </tr>
      <tr>
        <td>showErrorTip</td>
        <td>Show error tip auto</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>validOnChange</td>
        <td>Valid on data changed, 1.17.0+</td>
        <td>Boolean</td>
        <td>-</td>
        <td>true</td>
      </tr>
    </table>

    <h3>Form Methods</h3>
    <table class="table">
      <tr>
        <th>Method</th>
        <th>Description</th>
        <th>Parameter</th>
        <th>Return</th>
      </tr>
      <tr>
        <td>valid</td>
        <td>Overall verification form</td>
        <td>Empty</td>
        <td>{ result: isSuccess, messages: Array }</td>
      </tr>
      <tr>
        <td>validField</td>
        <td>verification individual field</td>
        <td>prop: String</td>
        <td>{valid: Boolean, message: String, label: String}</td>
      </tr>
      <tr>
        <td>validFieldJs(prop, next)</td>
        <td>simply performs validation without triggering dom operations</td>
        <td>prop, next: Function</td>
        <td>{valid: Boolean, message: String, label: String}</td>
      </tr>
      <tr>
        <td>reset</td>
        <td>Reset verification</td>
        <td>Empty</td>
        <td>Empty</td>
      </tr>
    </table>

    <h3>FormItem Property</h3>
    <table class="table">
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional</th>
        <th>Default</th>
      </tr>
      <tr>
        <td>label</td>
        <td>label text</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>prop</td>
        <td>Corresponding fields in the associated model can be automatically used to determine required attributes for the data validator. Details to <a href="https://github.com/heyui/hey-validator" target="_blank">hey-validator</a></td>
        <td>Object</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>showLabel</td>
        <td>Whether to show the label</td>
        <td>Boolean</td>
        <td></td>
        <td>false</td>
      </tr>
      <tr>
        <td>required</td>
        <td>When the input for a label is more complex, it can be set individually, only the display of required styles.</td>
        <td>Boolean</td>
        <td></td>
        <td>false</td>
      </tr>
      <tr>
        <td>readonly</td>
        <td>show readonly text</td>
        <td>Boolean</td>
        <td></td>
        <td>false</td>
      </tr>
      <tr>
        <td>single</td>
        <td>Whether it is a separate line, mainly used in <code>twocolumn</code> or <code>threecolumn</code> mode.</td>
        <td>Boolean</td>
        <td></td>
        <td>false</td>
      </tr>
      <tr>
        <td>icon</td>
        <td>show icon, 1.18.0</td>
        <td>String</td>
        <td></td>
        <td>-</td>
      </tr>
    </table>

    <h3>FormItem Slot</h3>
    <table class="table">
      <tr>
        <th>slot</th>
        <th>Description</th>
        <th>Parameter</th>
      </tr>
      <tr>
        <td>label</td>
        <td>Custom label, compatibility 1.18.0+</td>
        <td>label</td>
      </tr>
    </table>

    <h3>FormItem Methods</h3>
    <table class="table">
      <tr>
        <th>Method</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>reset</td>
        <td>reset validation of a FormItem</td>
      </tr>
    </table>
  </div>
</template>
