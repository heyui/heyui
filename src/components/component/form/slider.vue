<template>
  <div class="doc">
    <h2>Slider 滑块</h2>
    <h3>基本调用</h3>
    <p>对应的值：{{value}}</p>
    <Slider v-model="value"></Slider>

    <h3>左右范围</h3>
    <p>对应的值：{{value2}}</p>
    <Slider v-model="value2"></Slider>

    <h3>step</h3>
    <p>对应的值：{{value3}}</p>
    <Slider v-model="value3" :step="5"></Slider>

    <h3>左右范围step</h3>
    <p>对应的值：{{value4}}</p>
    <Slider v-model="value4" :step="5"></Slider>
  </div>
</template>

<script>

export default {
  data() {
    return {
      value: 0,
      value2: {
        start: 0,
        end: 20
      },
      value4: {
        start: 0,
        end: 20
      },
      value3: 0
    }
  },
  methods: {
  }
}
</script>
