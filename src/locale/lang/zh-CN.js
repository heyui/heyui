const lang = {
  h: {
    locale: 'zh-CN',
    select: {
      nullOptionText: '请选择',
      placeholder: '请选择',
      searchPlaceHolder: '请输入筛选文本'
    },
    autoComplate: {
      placeholder: '请输入',
      emptyContent: '未搜索到相关数据'
    },
    validation: {
      base: {
        required: '不能为空',
        maxLen: '文字长度不能超过{value}个字',
        minLen: '文字长度不能少于{value}个字',
        max: '不能大于{value}',
        min: '不能小于{value}',
      },
      type: {
        int: '不是正确的整数格式',
        number: '不是正确的数字格式',
        email: '不是正确的邮箱格式',
        url: '不是正确的网址格式',
        tel: '不是正确的电话号码格式',
        mobile: '不是正确的手机号码格式',
        globalmobile: '不是正确的国际号码格式',
      }
    },
    uploader: {
      upload: '上传',
      reUpload: '重新上传'
    },
  }
};

export default lang;
