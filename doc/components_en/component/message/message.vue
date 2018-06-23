<template>
  <div class="doc">
    <h2>Message</h2>
    <h3>Basic</h3>
    <blockquote>There are two kinds of calls written here, which are actually the same method object. The following use cases use the vue call to make an example. The js call mode is the same as the vue call.</blockquote>
    <example demo="message/message1"></example>

    <h3>Different types of message prompts</h3>
    <example demo="message/message2"></example>

    <h3>Different types of Message hints</h3>
    <example demo="message/message3"></example>

    <h3>Do not close automatically</h3>
    <example demo="message/message4"></example>

    <h3>Loading</h3>
    <example demo="message/message5"></example>

    <h3>Set global auto-off time</h3>
    <example demo="message/message6"></example>


    <h3>Message Property</h3>
    <table class="table">
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional</th>
        <th>Default</th>
      </tr>
      <tr>
        <td>text</td>
        <td>Prompt text</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>type</td>
        <td>Prompt type</td>
        <td>String</td>
        <td>loading, info, warn, success, error</td>
        <td>info</td>
      </tr>
      <tr>
        <td>timeout</td>
        <td>How many milliseconds to display automatically close</td>
        <td>Number</td>
        <td>-</td>
        <td>3000ms</td>
      </tr>
    </table>
  </div>
</template>