<template>
  <div class="doc">
    <h2>Skeleton</h2>
    <blockquote>1.17.0+</blockquote>
    <p class="component-name-tip">In non-string templates，it is necessary to use <code>h-skeleton</code>. </p>

    <p>A skeleton screen is essentially a blank version of a page into which information is gradually loaded.</p>

    <h3>Basic</h3>
    <exampleEn demo="other/skeleton1"></exampleEn>

    <h3>animation</h3>
    <exampleEn demo="other/skeleton2"></exampleEn>

    <h3>list</h3>
    <exampleEn demo="other/skeleton3"></exampleEn>

    <h3>Skeleton Property</h3>
    <table class="table">
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional</th>
        <th>Default</th>
      </tr>
      <tr>
        <td>loading</td>
        <td>Display the skeleton when true</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>active</td>
        <td>Show animation effect	</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>title</td>
        <td>Show title placeholder</td>
        <td>Boolean</td>
        <td>-</td>
        <td>true</td>
      </tr>
      <tr>
        <td>paragraph</td>
        <td>Show paragraph placeholder</td>
        <td>Boolean</td>
        <td>-</td>
        <td>true</td>
      </tr>
      <tr>
        <td>titleWidth</td>
        <td>Set the width of title</td>
        <td>String</td>
        <td>-</td>
        <td>38%</td>
      </tr>
      <tr>
        <td>rows</td>
        <td>Set the row count of paragraph</td>
        <td>Number</td>
        <td>-</td>
        <td>3</td>
      </tr>
    </table>
  </div>
</template>

<script>
