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
      console.log(result);
    };//=> 生成一个全局函数（一定要挂载到全局）
    let CALL_BACK = options.jsonp || 'callback';
    let _default = {
      jsonp: 'callback',
      jsonpCallback: FN_NAME
    };

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