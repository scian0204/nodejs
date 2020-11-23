var express = require("express");
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '1234',
  database: 'nodejs'
});
connection.connect();

router.post('/form', function(req, res) {
    res.render('email.ejs', req.body);
});


router.post('/ajax', function(req, res) {
    var {email} = req.body;
    var responseData = {};
  
    var sql = `select name from user where email = '${email}';`
    var query = connection.query(sql, function(err, rows) {
      if(err) throw err;
      if(rows[0]) {
        responseData.result = "ok";
        responseData.name = rows[0].name;
      } else {
        responseData.result = "none";
        responseData.name = "";
      }
      res.json(responseData);
    });
  
    // console.log(req.body.email);
    // var responseData = {'result': 'ok', ...req.body};
    // res.json(responseData);
  });

module.exports = router;