<template>
  <div class="doc">
    <h2>DropdownCustom 自定义下拉控件</h2>
    <p>
      <DropdownCustom>
        <span>个人信息</span>
        <div slot="content" v-width="200">
          <div v-padding="20">
            <img :width="80" :height="80" style="border-radius:80px;float:left" src="http://www.ch-un.com/images/head.jpg">
            <div style="height:80px;margin-left:90px;line-height:80px;">LAN</div>
          </div>
          <Row style="line-height:40px;border-top:1px solid #EEE;"><Col width=12 class="text-center" style="border-right:1px solid #EEE;"><a>个人信息</a></Col><Col width=12 class="text-center"><a>注销</a></Col></Row>
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
