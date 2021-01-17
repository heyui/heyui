<template>
  <div class="page-resource">
    <com-head></com-head>
    <com-frame class="page-body">
      <div slot="left-frame">
        <ul>
          <ul>
            <li>
              <router-link
                to="/en/resource/heycli"
                :class="{'router-link-active': $route.name =='en_resourceheycli' || $route.name =='en_resource'}"
              >hey-cli scaffolding</router-link>
            </li>
            <li>
              <router-link to="/en/resource/heysnippets">Snippets for vscode</router-link>
            </li>
            <li>
              <router-link to="/en/resource/umock">umock server</router-link>
            </li>
            <li>
              <router-link to="/en/resource/heyutils">hey-utils</router-link>
            </li>
            <li>
              <router-link to="/en/resource/heyvalidator">hey-validator</router-link>
            </li>
            <li>
              <router-link to="/en/resource/model">js-model</router-link>
            </li>
            <li>
              <router-link to="/en/resource/manba">manba dateformat</router-link>
            </li>
          </ul>
        </ul>
      </div>
      <div slot="right-frame">ready</div>
    </com-frame>
  </div>
</template>
<script>
import comHead from './common/header.vue';
import comFrame from './common/frame.vue';
export default {
  data() {
    return {
      pass: '',
      error: false
    };
  },
  methods: {},
  components: {
    comHead,
    comFrame
  }
};
</script>
