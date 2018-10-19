/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/5
    Time: 18:57
*/
const  express = require('express');
const router = express.Router();
const db = require('../../libs/db');
const common = require('../../libs/common');
const sql = require('../../libs/sql');

const login = require('./login');
const register = require('./register');
const get = require('./get');
const del = require('./del');


//登陆验证
router.use('/login',function(req,res,next){
    let name = req.body.name;
    let password = req.body.password;
    // console.log(name+password);
    login(db, name, password, common, function(data){
        res.send(data);
        // console.log(data);
    })
});
//增加登陆账号
router.use('/register',function(req,res,next){
    let name = req.body.userName;
    let password = req.body.userPassword;
    // console.log(req.body);
    register(db,name,password,common,function(data){
        // console.log(data.result[0]);
        res.send(data);
    })
});
//获取所有的登录账号
router.use('/get', function(req,res,next){
    get(db, common, function(data){
        // console.log(data.result[0]);
        res.send(data);
    })
});
//删除某一个登录账号
router.use('/del', function(req,res,next){
    var id = req.body.userId;
    del(db, id, sql, function(data){
        // console.log(data.result[0]);
        res.send(data);
    })
});

module.exports = router;
