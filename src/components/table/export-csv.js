const getIeVersion = function (browser) {
  const ua = navigator.userAgent;
  const isIE = ua.indexOf('compatible') > -1 && ua.indexOf('MSIE') > -1;
  if (isIE) {
    const reIE = new RegExp('MSIE (\\d+\\.\\d+);');
    reIE.test(ua);
    return parseFloat(RegExp['$1']);
  } else {
    return false;
  }
};

const getDownloadUrl = function (text) {
  const BOM = '\uFEFF';
  if (window.Blob && window.URL && window.URL.createObjectURL) {
    const csvData = new Blob([BOM + text], { type: 'text/csv' });
    return URL.createObjectURL(csvData);
  } else {
    return 'data:attachment/csv;charset=utf-8,' + BOM + encodeURIComponent(text);
  }
};

export default function (filename, text) {
  let ieVersion = getIeVersion;
  if (ieVersion && ieVersion < 10) {
    const oWin = window.top.open('about:blank', '_blank');
    oWin.document.charset = 'utf-8';
    oWin.document.write(text);
    oWin.document.close();
    oWin.document.execCommand('SaveAs', filename);
    oWin.close();
  } else if (navigator.msSaveBlob) {
    const BOM = '\uFEFF';
    const csvData = new Blob([BOM + text], { type: 'text/csv' });
    navigator.msSaveBlob(csvData, filename);
  } else {
    const link = document.createElement('a');
    link.download = filename;
    link.href = getDownloadUrl(text);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
