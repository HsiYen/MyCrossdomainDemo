let express = require('express');
let app = express();


app.all('*', function (req, res, next) {
  //=>星号为所有资源都允许访问
  /*
    => res.header("Access-Control-Allow-Origin", "http://127.0.0.1:6060/")
    为只有http://127.0.0.1:6060/可以允许访问
    ‘Access-Control-Allow-Credentials’ 跨域是否允许携带凭证，如：cookie
    设置为false时，cookie失效，session实效
    =>res.header("Access-Control-Allow-Credentials’", true);
    ‘res.header("Access-Control-Allow-Headers", "X-Requested-With");’
    =>常用头部信息‘Content-Type’,'Content-Length','Authorization','Accept','X-Requested-With'
  */
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  // res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
app.get('/', (req, res) => {
  res.send('nihao');
});
app.get('/queryInfo', (req, res) => {//JSONP测试
  let fn = req.query.cb,
    data = {
      code: 0,
      msg: 'my name is jinxiyan'
    };
  res.send(`${fn}(${JSON.stringify(data)})`);
  // res.send(data);
});
app.get('/queryInfo_Two', (req, res) => {//CORS测试
  res.send({
    code: 0,
    msg: 'my name is jinxiyan'
  });
});
app.listen(6060, () => {
  console.log("服务器已启动 http://127.0.0.1:6060/");
});
app.use(express.static('./static'));//基于6060下的静态页面 地址：localhost:6060/test.html
