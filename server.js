var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
})

app.get('/', function (req, res) {
  res.send('Hello World!')
});


app.get('/user/:userId', function (req, res) {

  console.log(req.params.userId + '의 정보를 가져옵니다');

  // TODO 실제로 DB 에서 userId 에 해당하는 사용자 정보를 가져오는 로직을 개발해야 함
  var user = {
    userId: 13579,
    name: 'John',
    email: 'yohany_AT_gmail.com',
    company: 'KossLAB'
  };

  res.send(user);
});

app.post('/user', function (req, res) {

  console.log('데이터 확인', req.body);

  // TODO 실제로 DB 데이터를 저장하는 로직을 개발해야 함.

  res.send({state: 'OK', data: req.body});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
