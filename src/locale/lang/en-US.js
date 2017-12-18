const lang = {
  h: {
    locale: 'en-US',
    select: {
      nullOptionText: 'Select Option',
      placeholder: 'Select',
      searchPlaceHolder: 'Search'
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
        min: " can't be less than {value}",
      },
      type: {
        int: ' is not the correct integer format',
        number: ' is not the correct digital format',
        email: ' is not the correct mailbox format',
        url: ' is not the correct URL format',
        tel: " is not the correct phone number format",
        mobile: ' is not the correct mobile number format',
        globalmobile: ' is not the correct international mobile number format',
      }
    },
    uploader: {
      upload: 'Upload',
      reUpload: 'ReUpload'
    }
  }
};


export default lang;
