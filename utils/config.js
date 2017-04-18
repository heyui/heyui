const config = {
  key_field: "key",
  title_field: "title",
  render_field: "render_html",
  modal: {
    hasDivider: false
  },
  page: {
    small: false,
    size: 10,
    sizes: [10, 50, 100, 200],
    layout: {
      default: 'total,prev,pager,next,jumper,sizes'
    }
  },
  format: {
    date: 'YYYY-MM-DD',
    month: 'YYYY-MM',
    year: 'YYYY',
    time: 'HH:mm',
    datetime: 'YYYY-MM-DD HH:mm',
    datehour: 'YYYY-MM-DD HH:mm',
    datetimesecond: 'YYYY-MM-DD HH:mm:ss'
  },
  datePickerOptions: {
    shortcuts: {
      today: {
        title: "今天",
        value() {
          return new Date();
        }
      },
      yesterday: {
        title: "昨天",
        value() {
          const date = new Date();
          date.setTime(date.getTime() - 3600 * 1000 * 24);
          return date;
        }
      }
    }
  },
  daterangeOptions: {
    paramName: {
      start: 'start',
      end: 'end'
    }
  },
  datetimeOptions: {
    minuteStep: 5
  },
  configs: {
    datetimeoptions: {
      option1: {
        start: '07:30',
        end: '20:00',
        minuteStep: 10
      }
    }
  },
  weeks: ['日', '一', '二', '三', '四', '五', '六'],
  months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一', '十二'],
};


export default config;
