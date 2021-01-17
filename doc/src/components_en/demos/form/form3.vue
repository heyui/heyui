<template>
  <div>
    <Form :label-width="110" :mode="mode" :model="data" :rules="validationRules" ref="form" :top="0.2" showErrorTip>
      <FormItem single>
        <SwitchList :datas="modeParam" v-model="mode" :small="true"></SwitchList>
      </FormItem>
      <FormItem label="Input" prop="inputData">
        <input type="text" v-model="data.inputData" placeholder="Only enter 15 and limit the input of 30 words" v-wordlimit='30' />
        <template slot="error" slot-scope="props">
          <!-- *type*: base, combine, async -->
          <span class="link" v-if="props.type == 'async'" @click="open">+++++++Custom error message+++++++</span>
        </template>
      </FormItem>
      <FormItem label="Integer" prop="intData">
        <Slider v-model="data.intData"></Slider>
      </FormItem>
      <FormItem label="Integer" prop="intData">
        <NumberInput v-model="data.intData" :min="0" :max="100"></NumberInput>
      </FormItem>
      <FormItem label="Readonly" readonly>Read-only data</FormItem>
      <FormItem label="Digital" prop="numberData">
        <NumberInput type="text" v-model="data.numberData" />
      </FormItem>
      <FormItem label="Mail" prop="emailData">
        <input type="text" v-model="data.emailData" />
      </FormItem>
      <FormItem label="URL" prop="urlData">
        <input type="text" v-model="data.urlData" />
      </FormItem>
      <FormItem label="Cellphone " prop="telData">
        <input type="text" v-model="data.telData" />
      </FormItem>
      <FormItem label="Phone" prop="mobileData">
        <input type="text" v-model="data.mobileData" />
      </FormItem>
      <FormItem label="Amount" :required="true" single>
        <div class="h-input-group">
          <div class="h-input-addon">
            <Select v-model="data.select1Data" :datas="param1" :no-border="true" :null-option="false"></Select>
          </div>
          <FormItem prop="money.minData" label="Starting amount" :show-label="false">
            <input type="text" placeholder="Starting amount" v-model="data.money.minData" />
          </FormItem>
          <span class="h-input-addon">-</span>
          <FormItem prop="money.maxData" label="End amount" :show-label="false">
            <input type="text" placeholder="End amount" v-model="data.money.maxData" />
          </FormItem>
          <span class="h-input-addon">K</span>
        </div>
      </FormItem>
      <FormItem label="Select" prop="select2Data">
        <Select v-model="data.select2Data" dict="simple"></Select>
      </FormItem>
      <FormItem label="Tags" prop="taginputsData">
        <TagInput v-model="data.taginputsData"></TagInput>
      </FormItem>
      <FormItem label="Multiple" prop="select3Data">
        <Select v-model="data.select3Data" dict="simple" :multiple="true"></Select>
      </FormItem>
      <FormItem label="Date" ref="datapicker" prop="dateData">
        <DatePicker v-model="data.dateData"></DatePicker>
      </FormItem>
      <FormItem label="Score" prop="rateData">
        <Rate v-model="data.rateData" :show-text="true"></Rate>
      </FormItem>
      <FormItem label="Textarea" :single="true" prop="textareaData">
        <textarea rows="3" v-autosize v-wordcount="50" v-model="data.textareaData"></textarea>
      </FormItem>
      <FormItem label="Single" prop="radioData">
        <Radio v-model="data.radioData" :datas="dataParam"></Radio>
      </FormItem>
      <FormItem label="Multiple" prop="checkboxData">
        <Checkbox v-model="data.checkboxData" :datas="dataParam"></Checkbox>
      </FormItem>
      <FormItem label="Fuzzy" prop="autocompleteData">
        <AutoComplete v-model="data.autocompleteData" config="simple"></AutoComplete>
      </FormItem>
      <!--
          The required attribute defined here also applies to the validation rules.
         -->
      <FormItem label="Custom" prop="thingsData[0]" required>
        <input type="text" v-model="data.thingsData[0]" />
      </FormItem>
      <div>
        <FormItem v-for="(item, index) of data.inputsData" :key="index" :label="'Custom'+(index+1)" :prop="'inputsData['+index+'].value'">
          <Row type="flex">
            <Cell class="flex1">
            <input type="text" v-model="item.value" />
            </Cell>
            <Cell class="text-right" v-width="50">
            <Poptip @confirm="remove(index)" content="Confirm delete?">
              <Button text-color="red" :no-border="true" icon="h-icon-trash"></Button>
            </Poptip>
            </Cell>
          </Row>
        </FormItem>
      </div>
      <FormItem single>
        <Button size="s" text-color="blue" @click="add">Add input box</Button>
      </FormItem>
      <FormItem :no-padding="true" single>
        <Button color="primary" :loading="isLoading" @click="submit" v-tooltip content="Perform asynchronous verification but do not wait for results">submit</Button>
        <i class="h-split"></i>
        <Button color="green" :loading="isLoading" @click="submitAsync" v-tooltip content="Wait for all asynchronous validations to be submitted after execution">Asynchronous submission</Button>
        <i class="h-split"></i>
        <Button @click="reset">Clear verification</Button>
        <Button @click="resetDatepicker">Clear date verification</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mode: 'single',
      data: {
        intData: null,
        numberData: null,
        urlData: null,
        emailData: null,
        telData: null,
        mobileData: null,
        inputData: '',
        textareaData: 'test',
        radioData: 1,
        rateData: null,
        checkboxData: [1],
        select1Data: 'Renminbi',
        select2Data: '',
        select3Data: [],
        taginputsData: [],
        autocompleteData: null,
        money: {
          minData: null,
          maxData: null
        },
        dateData: null,
        inputsData: [],
        thingsData: ['']
      },
      dataParam: {
        1: 'male',
        2: 'Female',
        3: 'other'
      },
      param1: ['US dollar', 'Renminbi', 'ruble'],
      isLoading: false,
      modeParam: {
        single: 'One column per line',
        twocolumn: 'Two columns and one row',
        threecolumn: 'Three columns and one row',
        block: 'Independent title'
      },
      isInputAsyncError: false,
      validationRules: {
        rules: {
          textareaData: {
            maxLen: 50,
            minLen: 10
          },
          inputData: {
            // The judgment here does not affect the final valid result, so it can also be used as some validation hints.
            validAsync(value, next, parent, data) {
              log(value);
              setTimeout(() => {
                if (value == 15) {
                  next();
                } else {
                  next('ID is not equal to 15');
                }
              }, 1000);
            }
          }
        },
        required: [
          'autocompleteData',
          'select2Data',
          'select3Data',
          'inputsData[].value',
          'inputData',
          'radioData',
          'rateData',
          'checkboxData',
          'moneyData',
          'dateData',
          'taginputsData',
          'money.minData',
          'money.maxData',
          'intData',
          'numberData',
          'urlData',
          'emailData',
          'telData',
          'mobileData',
          'textareaData'
        ],
        int: ['intData'],
        number: ['numberData', 'money.minData', 'money.maxData'],
        url: ['urlData'],
        email: ['emailData'],
        tel: ['telData'],
        mobile: ['mobileData'],
        combineRules: [
          {
            parentRef: 'money',
            refs: ['minData', 'maxData'],
            valid: {
              valid: 'lessThan',
              message:
                'The starting amount cannot be greater than the ending amount'
            }
          }
        ]
      }
    };
  },
  methods: {
    submit() {
      let validResult = this.$refs.form.valid();
      if (validResult.result) {
        this.$Message('Successful verification');
      }
    },
    submitAsync() {
      this.isLoading = true;
      this.$refs.form.validAsync().then(result => {
        if (result.result) {
          this.$Message('Successful verification');
        }
        this.isLoading = false;
      });
    },
    open() {
      this.$Modal({
        title: 'deal with',
        content: 'I am going to do a special treatment.'
      });
    },
    reset() {
      this.isLoading = false;
      this.$refs.form.resetValid();
    },
    resetDatepicker() {
      this.$refs.datapicker.resetValid();
    },
    add() {
      this.data.inputsData.push({ value: '' });
    },
    remove(index) {
      this.data.inputsData.splice(index, 1);
    }
  }
};
</script>
