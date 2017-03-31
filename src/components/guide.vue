<template>
  <div class="page-start">
    <com-frame class="page-body">
      <div slot="left-frame">
        <ul>
          <ul>
            <li class="font12 gray-color">Version：1.0 beta</li>
            <li><router-link to="/guide/guide">入门</router-link></li>
            <li><router-link to="/guide/quickstart">快速上手</router-link></li>
            <li><router-link to="/guide/themes">更换主题</router-link></li>
            <li><router-link to="/guide/logs">更新日志</router-link></li>
          </ul>
        </ul>
      </div>
      </com-frame>
  </div>
</template>

<script>

export default {
  data () {
    return {
      pass: '',
      error: false
    }
  },
  methods: {
  }
}
</script>
