const lang = {
  h: {
    locale: 'en-US',
    common: {
      cancel: 'Cancel',
      confirm: 'Confirm',
      clear: 'Clear',
      nullOptionText: 'please choose',
      empty: 'empty',
      any: 'any'
    },
    confirm: {
      title: 'Confirm'
    },
    select: {
      nullOptionText: 'please choose',
      placeholder: 'select',
      emptyContent: 'no results found',
      searchPlaceHolder: 'search',
      limitSize: 'You can select up to {0} data.'
    },
    category: {
      placeholder: 'please choose',
      nullOptionText: 'please choose'
    },
    categoryModal: {
      limitWords: 'You can select up to {size} data.',
      emptyContent: 'No results found',
      total: 'total'
    },
    autoComplate: {
      placeholder: 'Search Input',
      emptyContent: 'No results found'
    },
    validation: {
      base: {
        required: ' can not be empty',
        maxLen: " text length can't exceed {value} bits",
        minLen: " text length can't be less than {value} bits",
        max: ' no more than {value}',
        min: " can't be less than {value}"
      },
      type: {
        int: ' is not the correct integer format',
        number: ' is not the correct digital format',
        email: ' is not the correct mailbox format',
        url: ' is not the correct URL format',
        tel: ' is not the correct phone number format',
        mobile: ' is not the correct mobile number format',
        globalmobile: ' is not the correct international mobile number format'
      }
    },
    date: {
      today: 'Today',
      yesterday: 'Yesterday',
      year: 'year',
      month: 'month',
      week: 'week',
      quarter: 'quarter',
      day: 'day',
      header: {
        year: '',
        month: '',
        day: ''
      },
      show: {
        week: '{year} {weeknum}th week {daystart} - {dayend}',
        weekInput: '{year} {week}th week',
        quarter: '{year} {quarter}th quarter'
      },
      months: {
        january: 'Jan',
        february: 'Feb',
        march: 'Mar',
        april: 'Apr',
        may: 'May',
        june: 'Jun',
        july: 'Jul',
        august: 'Aug',
        september: 'Sep',
        october: 'Oct',
        november: 'Nov',
        december: 'Dec'
      },
      weeks: {
        monday: 'Mon',
        tuesday: 'Tue',
        wednesday: 'Wed',
        thursday: 'Thu',
        friday: 'Fri',
        saturday: 'Sat',
        sunday: 'Sun'
      }
    },
    datepicker: {
      placeholder: 'select date',
      startTime: 'start',
      endTime: 'end',
      customize: 'customize',
      start: 'start',
      end: 'end'
    },
    wordlimit: {
      warn: 'You are limited to enter {0} words'
    },
    wordcount: {
      warn: 'You have exceeded {0} words'
    },
    treepicker: {
      selectDesc: 'You have selected {0} items',
      placeholder: 'please select'
    },
    search: {
      placeholder: 'search...',
      searchText: 'Search'
    },
    taginput: {
      limitWords: 'You have exceeded the limit'
    },
    table: {
      empty: 'No results found'
    },
    uploader: {
      upload: 'Upload',
      reUpload: 'ReUpload'
    },
    pagination: {
      incorrectFormat: 'The format of the value you entered is incorrect',
      overSize: 'The value you entered exceeds the range',
      totalBefore: 'Total',
      totalAfter: 'items',
      sizeOfPage: '{size} items/page'
    }
  }
};

export default lang;
