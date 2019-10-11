let express = require('express');
let app = express();


app.all('*', function (req, res, next) {
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
app.get('/queryInfo', (req, res) => {
  let fn = req.query.cb,
    data = {
      code: 0,
      msg: 'my name is jinxiyan'
    };
  res.send(`${fn}(${JSON.stringify(data)})`);
  // res.send(data);
});

app.listen(6060, () => {
  console.log("服务器已启动 http://127.0.0.1:6060/");
});
app.use(express.static('./static'));//基于6060下的静态页面 地址：localhost:6060/test.html
