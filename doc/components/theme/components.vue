<style lang="less">
.page-theme-show {
  .theme-show {
    margin-bottom: 100px;
    .colors {
      .h-col > div {
        padding: 20px 0px;
        text-align: center;
        border-radius: 5px;
      }
    }
    h3 {
      margin: 30px 0 10px;
    }
    .buttons .h-btn {
      margin-bottom: 10px;
    }
  }
  .theme-setting {
    padding: 0 25px;
  }
}
</style>
<template>
  <div class="page-theme-show page-body com-frame">
    <div class="left-frame">
      <div class="theme-setting">
        <info></info>
      </div>
    </div>
    <div class="right-frame">
      <div class="theme-show">
        <section class="colors">
          <h3>Color</h3>
          <Row :space="10">
            <Cell :width="4" :md='8' :xs="12"><div class="white-color bg-primary-color">Primary</div></Cell>
            <Cell :width="4" :md='8' :xs="12"><div class="white-color bg-primary1-color">Primary1</div></Cell>
            <Cell :width="4" :md='8' :xs="12"><div class="dark4-color bg-primary2-color">Primary2</div></Cell>
          </Row>
          <Row :space="10">
            <Cell :width="4" :md='8' :xs="12"><div class="white-color bg-green-color">Green</div></Cell>
            <Cell :width="4" :md='8' :xs="12"><div class="white-color bg-blue-color">Yellow</div></Cell>
            <Cell :width="4" :md='8' :xs="12"><div class="white-color bg-yellow-color">Warning</div></Cell>
            <Cell :width="4" :md='8' :xs="12"><div class="white-color bg-red-color">Red</div></Cell>
          </Row>
          <Row :space="10">
            <Cell :width="4" :md='8' :xs="12"><div class="white-color bg-dark-color">Dark</div></Cell>
            <Cell :width="4" :md='8' :xs="12"><div class="white-color bg-dark1-color">Dark1</div></Cell>
            <Cell :width="4" :md='8' :xs="12"><div class="white-color bg-dark2-color">Dark2</div></Cell>
            <Cell :width="4" :md='8' :xs="12"><div class="white-color bg-dark3-color">Dark3</div></Cell>
            <Cell :width="4" :md='8' :xs="12"><div class="white-color bg-dark4-color">Dark4</div></Cell>
          </Row>
          <Row :space="10">
            <Cell :width="4" :md='8' :xs="12"><div class="dark-color bg-gray-color">Gray</div></Cell>
            <Cell :width="4" :md='8' :xs="12"><div class="dark-color bg-gray1-color">Gray1</div></Cell>
            <Cell :width="4" :md='8' :xs="12"><div class="dark-color bg-gray2-color">Gray2</div></Cell>
            <Cell :width="4" :md='8' :xs="12"><div class="dark-color bg-gray3-color">Gray3</div></Cell>
            <Cell :width="4" :md='8' :xs="12"><div class="dark-color bg-gray4-color">Gray4</div></Cell>
          </Row>
        </section>
        <section>
          <h3>Button</h3>
          <div class="buttons">
            <p>
              <Button>Default</Button>
              <Button color="primary">Primary color</Button>
              <Button :text="true">Text button</Button>
            </p>
            <p>
              <Button color="primary">Primary button</Button>
              <Button color="yellow">YELLOW button</Button>
              <Button color="green">GREEN button</Button>
              <Button color="red">RED button</Button>
              <Button color="blue">BLUE button</Button>
              <Button color="gray">GRAY button</Button>
            </p>
            <p>
              <Button text-color="primary">Primary button</Button>
              <Button text-color="yellow">YELLOW button</Button>
              <Button text-color="green">GREEN button</Button>
              <Button text-color="red">RED button</Button>
              <Button text-color="blue">BLUE button</Button>
              <Button text-color="gray">GRAY button</Button>
            </p>
            <p>
              <Button :icon-circle='true' icon="h-icon-inbox"></Button>
              <Button color="primary" :circle="true" icon="h-icon-search">Search</Button>
              <Button color="yellow" :circle="true">YELLOW button</Button>
              <Button text-color="yellow" :circle="true">Text button</Button>
            </p>
          </div>
          <h3>Radio</h3>
          <div>
            <Radio dict="simple" v-model="radio"></Radio>
          </div>
          <h3>Checkbox</h3>
          <div>
            <Checkbox dict="simple" v-model="checkbox"></Checkbox>
          </div>
          <h3>HSwitch</h3>
          <div>
            <hSwitch v-model="switchvalue">Normal</hSwitch>
            <hSwitch v-model="switchvalue" small>Small</hSwitch>
          </div>
          <Row>
            <Cell :width="8" :md="12" :xs="24">
              <h3>Input</h3>
              <div>
                <input type="text">
              </div>
            </Cell>
            <Cell :width="8" :md="12" :xs="24">
              <h3>Textarea</h3>
              <div>
                <textarea />
              </div>
            </Cell>
            <Cell :width="8" :md="12" :xs="24">
              <h3>Rate</h3>
              <div>
                <p><Rate v-model="rate"></Rate></p>
              </div>
            </Cell>
            <Cell :width="12" :xs="24">
              <h3>NumberInput</h3>
              <div>
                <p><NumberInput style="max-width:300px" v-model="number" useOperate></NumberInput></p>
              </div>
            </Cell>
            <Cell :width="12" :xs="24">
              <h3>TagInput</h3>
              <div>
                <p><TagInput style="max-width:300px" v-model="tags"></TagInput></p>
              </div>
            </Cell>
          </Row>
          <h3>SwitchList</h3>
          <div>
            <SwitchList v-model="radio" dict="simple"></SwitchList>
          </div>
          <h3>Select</h3>
          <div>
            <p><Select style="max-width:300px" dict="simple" v-model="radio"></Select></p>
            <p><Select style="max-width:500px" dict="simple" v-model="checkbox" multiple></Select></p>
          </div>
          <h3>Pagination</h3>
          <div>
            <p><Pagination v-model="pagination"></Pagination></p>
            <p><Pagination v-model="pagination" small></Pagination></p>
          </div>
          <h3>Steps</h3>
          <div style="max-width: 400px;">
            <Steps :datas="data" :step="step"></Steps>
          </div>
          <h3>Progress</h3>
          <div style="max-width: 500px;">
            <Progress :percent="60"><span slot="title">Project</span><span slot="text"><span class="primary-color">180</span> K</span></Progress>
            <Progress :percent="99" color="green"><span slot="title">Project</span><span slot="text">Success</span></Progress>
            <Progress :percent="12" color="red"><span slot="title">Project</span><span slot="text">Failure</span></Progress>
          </div>
          <h3>DatePicker</h3>
          <div>
            <p><DatePicker v-model="datevalue" inline></DatePicker></p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import info from './info.vue';
export default {
  components: {
    info
  },
  data() {
    return {
      color: null,
      radio: 1,
      checkbox: [],
      switchvalue: false,
      number: 10,
      tags: ['Theme'],
      rate: null,
      datevalue: null,
      pagination: {
        page: 1,
        size: 10,
        total: 100
      },
      data: ['step1', 'step2', 'step3', 'step4'],
      step: 1
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {

    }
  },
  computed: {

  }
};
</script>
