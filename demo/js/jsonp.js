; (function anonymous (window) {
  /*
    url:请求地址
    options:执行的函数
    fn:传过去的参数
    jsonp:'callback'
    jsonpCallback:'默认生成'
  */
  let jsonp = function (url, options = {}) {

    let FN_NAME = `JOSNP${new Date().getTime()}`;//=>生成随机函数名
    FN_NAME = options.jsonpCallback || FN_NAME;
    window[FN_NAME] = function (result) {
      //=>数据获取成功 移除SCRIPT标签和创建全局函数
      document.removeChild(SCRIPT);
      window[FN_NAME] = null;

      //=>执行resolve

    };//=> 生成一个全局函数（一定要挂载到全局）
    let CALL_BACK = options.jsonp || 'callback';
    //=>发送jsonp请求
    //=> 加一个‘${new Date().getTime()}’主要是清除缓存
    SCRIPT.src = `${url}${url.indexOf('?') >= 0 ? '&' : '?'}${CALL_BACK}=${FN_NAME}&_=${new Date().getTime()}`;
    // let _default = {
    //   jsonp: CALL_BACK,
    //   jsonpCallback: FN_NAME
    // };

    return new Promise((resolve, reject) => {
      if (typeof url === 'undefined') {
        // throw new Error("url为空");
        reject("url为空");
        return;
      }
    });
  };

  //=> 暴露在全局下并且支持commonjs
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    //=> 支持CommonJs
    module.exports = {
      jsonp
    };
  }
  // try {
  //   export default jsonp;
  // } finally {
  //   window.jsonp = jsonp;
  // }
  window.jsonp = jsonp;

})(typeof window === 'undefined' ? global : window);
//=> window是浏览器环境下，global是Node环境下

//l来自bilibili教程https://www.bilibili.com/video/av65629949/?p=3