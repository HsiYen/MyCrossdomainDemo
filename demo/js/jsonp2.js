; (function anonymous (window) {//优化

  let jsonp = function (url, options = {}) {

    return new Promise((resolve, reject) => {
      //=>验证参数合法性
      if (typeof url === 'undefined') {
        reject("url为空");
        return;
      }
      //=>发jSONP请求
      let SCRIPT = document.createElement('script');
      let CALL_BACK = options.jsonp || 'callback';
      let FN_NAME = options.jsonpCallback || `JOSNP${new Date().getTime()}`;
      SCRIPT.src = `${url}${url.indexOf('?') >= 0 ? '&' : '?'}${CALL_BACK}=${FN_NAME}&_=${new Date().getTime()}`;
      //=>成功或失败后执行的函数
      window[FN_NAME] = function (result) {

        document.removeChild(SCRIPT);
        window[FN_NAME] = null;
        resolve(result);
      };
    });
  };

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    //=> 支持CommonJs
    module.exports = {
      jsonp
    };
  }
  window.jsonp = jsonp;

})(typeof window === 'undefined' ? global : window);

//l来自bilibili教程https://www.bilibili.com/video/av65629949/?p=3