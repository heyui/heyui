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
    table: {
      noDataText: '暂无数据',
      noFilteredDataText: '暂无筛选结果',
      confirmFilter: '筛选',
      resetFilter: '重置',
      clearFilter: '全部'
    },
    datepicker: {
      weeks: ['日', '一', '二', '三', '四', '五', '六'],
      months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一', '十二'],
      selectDate: '选择日期',
      selectTime: '选择时间',
      startTime: '开始时间',
      endTime: '结束时间',
      clear: '清空',
      ok: '确定',
      datePanelLabel: '[yyyy年] [m月]',
      month: '月',
      year: '年',
      weekStartDay: '0',
    },
    modal: {
      okText: '确定',
      cancelText: '取消'
    },
    poptip: {
      okText: '确定',
      cancelText: '取消'
    },
    page: {
      prev: '上一页',
      next: '下一页',
      total: '共',
      item: '条',
      items: '条',
      prev5: '向前 5 页',
      next5: '向后 5 页',
      page: '条/页',
      goto: '跳至',
      p: '页'
    },
    rate: {
      star: '星',
      stars: '星'
    },
    tree: {
      emptyText: '暂无数据'
    }
  }
};

export default lang;
