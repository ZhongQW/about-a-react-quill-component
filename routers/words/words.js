/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/5
    Time: 17:56
*/
const  express = require('express');
const router = express.Router();
const db = require('../../libs/db');

const allWords = require('./allWords');
const deleteAWords = require('./deleteWords');
const getPerson = require('./getPerson');

//获取所有留言
router.use('/getall',function(req,res,next){
    allWords(db,function(data){
        res.send(data);
    })
});
//删除一条评论
router.use('/delete',function(req,res,next){
    var id = req.body.id;
    deleteAWords(db,id,function(data){
        res.send(data);
    })
});
//查看留言者信息
router.use('/getperson',function(req,res,next){
    var id = req.body.id;
    getPerson(db,id,function(data){
        res.send(data);
    })
});


module.exports = router;
