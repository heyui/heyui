<template>
  <div class="doc">
    <h2>DropdownCustom 自定义下拉控件</h2>
    <p>
      <DropdownCustom>
        <span>触发的地方</span>
        <div slot="content" v-height="250" v-width="350" class="text-center">
          自定义内容
        </div>
      </DropdownCustom>
    </p>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  methods: {
  },
  components:{
  }
}
</script>
