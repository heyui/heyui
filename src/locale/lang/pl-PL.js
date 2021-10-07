const lang = {
  h: {
    locale: 'en-US',
    common: {
      cancel: 'Anuluj',
      confirm: 'Potwierdź',
      clear: 'Wyczyść',
      nullOptionText: 'Wybierz',
      empty: 'Pusty',
      any: 'Jakikolwiek'
    },
    confirm: {
      title: 'Potwierdź'
    },
    checkbox: {
      limitSize: 'Możesz wybrać maksymalnie {limitSize} elementów.'
    },
    select: {
      nullOptionText: 'Wybierz',
      placeholder: 'Wybierz',
      emptyContent: 'Brak wyników',
      searchPlaceHolder: 'Szukaj',
      limitSize: 'Możesz wybrać maksymalnie {limitSize} elementów.'
    },
    category: {
      placeholder: 'Wybierz'
    },
    cascader: {
      placeholder: 'Wybierz'
    },
    categoryModal: {
      limitWords: 'Możesz wybrać maksymalnie {limitSize} elementów.',
      emptyContent: 'Brak wyników',
      total: 'Razem'
    },
    categoryPicker: {
      nullOptionText: 'Wybierz',
      placeholder: 'Wybierz',
      total: 'Razem',
      limitSize: 'Możesz wybrać maksymalnie {limitSize} elementów.'
    },
    autoComplate: {
      placeholder: 'Szukaj',
      emptyContent: 'Brak wyników'
    },
    validation: {
      base: {
        required: ' nie może być puste',
        maxLen: ' nie może zwierać więcej niż {value} znaków',
        minLen: ' nie może zwierać mniej niż {value} znaków',
        max: ' nie może być większe niż {value}',
        min: ' nie może być mniejsze niż {value}'
      },
      type: {
        int: ' nie jest liczbą całkowitą',
        number: ' nie jest liczbą',
        email: ' nie jest poprawnym adresem e-mail',
        url: ' nie jest poprawnym adresem URL',
        tel: ' nie jest poprawnym numerem telefonu',
        mobile: ' nie jest poprawnym numerem telefonu',
        globalmobile: ' nie jest poprawnym międzynarodowym numerem telefonu'
      }
    },
    date: {
      today: 'Dziś',
      yesterday: 'Wczoraj',
      year: 'Rok',
      month: 'Miesiąc',
      week: 'Tydzień',
      quarter: 'Kwartał',
      day: 'Dzień',
      header: {
        year: '',
        month: '',
        day: ''
      },
      show: {
        week: '{daystart} - {dayend}, {weeknum}. tydzień {year}r.',
        weekInput: '{week}. tydzień {year}r.',
        quarter: '{quarter}. kwartał {year}r.'
      },
      months: {
        january: 'sty',
        february: 'lut',
        march: 'mar',
        april: 'kwi',
        may: 'maj',
        june: 'cze',
        july: 'lip',
        august: 'sie',
        september: 'wrz',
        october: 'paź',
        november: 'lis',
        december: 'gru'
      },
      weeks: {
        monday: 'pon',
        tuesday: 'wt',
        wednesday: 'śr',
        thursday: 'czw',
        friday: 'pt',
        saturday: 'sob',
        sunday: 'nd'
      }
    },
    datepicker: {
      placeholder: 'Wybierz datę',
      startTime: 'Początek',
      endTime: 'Koniec',
      customize: 'Edytuj',
      start: 'Początek',
      end: 'Koniec'
    },
    wordlimit: {
      warn: 'Możesz użyć maksymalnie {0} słów'
    },
    wordcount: {
      warn: 'Przekroczyłeś {0} słów'
    },
    treepicker: {
      selectDesc: 'Wybrałeś {0} pozycji',
      placeholder: 'Wybierz'
    },
    search: {
      placeholder: 'Szukaj...',
      searchButtonText: 'Szukaj'
    },
    taginput: {
      limitWords: 'Przekroczyłeś limit'
    },
    table: {
      empty: 'Brak wyników'
    },
    uploader: {
      upload: 'Wyślij',
      reUpload: 'Wyślij ponownie',
      overLimit: 'Liczba przesłanych plików przekracza limit'
    },
    pagination: {
      incorrectFormat: 'Format wartości jest błędny',
      overSize: 'Podana wartość wykracza poza zakres',
      totalBefore: 'Razem',
      totalAfter: 'pozycji',
      sizeOfPage: '{size} pozycji/strona'
    }
  }
};

export default lang;
