var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var router = require('./router/index');

// router/email.js로 이동함
// var main = require('./router/main');
// var email = require('./router/email');

// router/email.js로 이동함
// var mysql = require("mysql");
// var connection = mysql.createConnection({
//   host: 'localhost',
//   port: 3306,
//   user: 'root',
//   password: '1234',
//   database: 'nodejs'
// });
// connection.connect();

app.listen(3000, function () {
  console.log("start! express server on port 3000");
});

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use(router);

// router/email.js로 이동함
// app.use('/main', main);
// app.use('/email', email); // router/email.js

// router/index.js로 이동함
// app.get('/', function (req, res) {
//   res.sendFile(__dirname + "/public/main.html");
// });

// router/main.js로 이동함
// app.get('/main', function (req, res) {
//   res.sendFile(__dirname + "/public/main.html");
// });
  
// router/email.js로 이동함
// app.post("/email_post", function (req, res) {
//   console.log(req.body.email);
//   // var sql = `insert user set `;
//   // var num = 0;
//   // for (const k in req.body) {
//   //   sql += num++ > 0 ? ", " : "";
//   //   sql += `${k}=${req.body[k]}`;
//   // }
//   // sql += `;`;
//   // var query = connection.query(sql);
//   res.render('email.ejs', req.body);
//   // html -> 정적
//   // 동적 웹페이지 (데이터 포함)
//   // html 템플릿 -> pug, ejs
// });

// router/email.js로 이동함
// app.post('/ajax_send_email', function(req, res) {
//   var {email} = req.body;
//   var responseData = {};

//   var sql = `select name from user where email = '${email}';`
//   var query = connection.query(sql, function(err, rows) {
//     if(err) throw err;
//     if(rows[0]) {
//       responseData.result = "ok";
//       responseData.name = rows[0].name;
//     } else {
//       responseData.result = "none";
//       responseData.name = "";
//     }
//     res.json(responseData);
//   });

//   // console.log(req.body.email);
//   // var responseData = {'result': 'ok', ...req.body};
//   // res.json(responseData);
// });