/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/5
    Time: 12:26
*/
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'Zhongqw',
    password : '881127',
    database : 'blog'
});

connection.connect(function(err) {
    if (err) {
        return console.error('error: ' + err.message);
    }

    console.log('Connected to the MySQL server.');
});

module.exports = connection;