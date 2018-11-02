/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/5
    Time: 18:06
*/
const  express = require('express');
const router = express.Router();
const db = require('../../libs/db');

const get = require('./get');
const update = require('./update');
const blogSql = require('../../libs/sql');

//获取个人信息
router.use('/get',function(req,res,next){

    get(db,function(data){
        res.send(data);
    })
});
//修改个人信息
router.use('/update',function(req,res,next){
    var ownInfo = req.body;
    // console.log(ownInfo);
    update(db,ownInfo,blogSql,function(data){
        res.send(data);
    })
});

module.exports = router;