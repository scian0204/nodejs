var express = require("express");
var router = express.Router();
var mysql = require('mysql');
var path = require('path');

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '1234',
  database: 'nodejs'
});
connection.connect();

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../../public/join.html'));
});

router.post('/', function(req, res) {
    var {body} = req;
    var {email, name, password} = body;
    var sql = `insert into user (email,name,pw) values ("${email}", "${name}", "${password}")`;
    var query = connection.query(sql, function(err, rows) {
        if (err) throw err;
        else res.render('welcome.ejs', body);
    });
});

module.exports = router;