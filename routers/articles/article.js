/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/5
    Time: 15:54
*/
const  express = require('express');
const router = express.Router();
const db = require('../../libs/db');
const blogSql = require('../../libs/sql');

const addArticle = require('./add');
const deleteArticle = require('./delete');
const updateArticle = require('./update');
const allArticle = require('./allArticle');
const oneArticle = require('./oneArticle');

//增加文章
router.use('/add',function(req,res,next){
    addArticle(db, req.body.articleInfo, function(data){
        res.send(data);
    })
});
//获取所有文章
router.use('/getall',function(req,res,next){
    allArticle(db,function(data){
        res.send(data);
    })
});
//删除某一篇文章
router.use('/delete',function(req,res,next){
    var id = req.body.id;
    deleteArticle(db,id, blogSql, function(data){
        res.send(data);
    })
});
//修改文章
router.use('/update',function(req,res,next){
    updateArticle(db, req.body.data, function(data){
        res.send(data);
    })
});
//获取某一篇文章
router.use('/getone',function(req,res,next){
    var id = req.body.id;
    // console.log(req.body.id);
    oneArticle(db,id,blogSql,function(data){
        res.send(data);
        console.log(data);
    })
});

module.exports = router;
