import Pluploadjs from 'plupload-es6';


// 引用 hey-global 设置全局参数
G.set('customUploadToken', {
  value: null
});

const getUploadToken = () => {
  return new Promise((resolve) => {
    // 系统定义的异步请求
    R.Common.uploadToken().then((resp) => { // 获取上传token
      if (resp.ok) {
        G.set('customUploadToken', resp.body);
        resolve();
      }
    });
  });
};

export default function initUploader({
  perm = 'PRIVATE', // 公开 或者 私有
  browserButton,
  dragdropElement,
  url = G.get('env').fileOsAddr, // 上传服务器地址
  multiSelection = false,
  maxFileSize = '10mb',
  filters = {},
  params = {},
  fnFilesAdded = () => {},
  fnBeforeUpload = () => {},
  fnUploadProgress = () => {},
  fnFileUploaded = () => {},
  fnUploadComplete = () => {},
  fnError = () => {},
}) {
  filters.max_file_size = maxFileSize;
  const domain = G.get('env').fileOsAddr;
  const param = {
    runtimes: 'html5',
    browse_button: browserButton,
    url: `${url}?token=${G.get('customUploadToken').value}&permission=${perm}`,
    domain: G.get('env').fileOsAddr,
    chunk_size: '1mb',
    unique_names: true,
    multi_selection: multiSelection,
    filters,
    init: {
      FilesAdded(up, files) {
        let result = fnFilesAdded(up, files);
        // 超过上传限制
        if (result === false) {
          return false;
        }
        up.fileLength = files.length;
        getUploadToken().then(() => { // 获取上传token，如果没有可以直接跳过，直接调用up.start();
          up.start();
        });
      },
      BeforeUpload(up, file) {
        // 上传token设置
        up.setOption('url', `${url}?token=${G.get('customUploadToken').value}&permission=${perm}`);
        fnBeforeUpload(up, file);
      },
      UploadProgress(up, file) {
        fnUploadProgress(up, file);
      },
      FileUploaded(up, file, info) {
        const res = JSON.parse(info.response);
        up.fileLength -= 1;
        fnFileUploaded(up, file, info, `${domain}${res.key}`);
        if (up.fileLength === 0) {
          fnUploadComplete();
        }
      },
      UploadComplete() {},
      Error(up, err, errTip) {
        if (err.code === -600) {
          let max = up.settings.max_file_size || up.settings.filters.max_file_size;
          errTip = `文件大小不可超过${max.substring(0, max.length - 1).toUpperCase()}`;
        } else if (err.code == -601) {
          errTip = "文件格式不支持";
        } else {
          errTip = err.message;
        }
        fnError(up, err, errTip);
      },
    },
  };

  // 是否允许拖拽
  if (dragdropElement) {
    param.dragdrop = true;
    param.drop_element = dragdropElement;
  }
  Utils.extend(param, params);
  const uploader = new Pluploadjs.plupload.Uploader(param);
  uploader.init();
  return uploader;
}