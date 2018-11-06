/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/5
    Time: 17:56
*/
const  express = require('express');
const router = express.Router();
const db = require('../../libs/db');
const blogSql = require('../../libs/sql');

const allWords = require('./allWords');
const deleteBlogWords = require('./deleteBlogWords');
const getPerson = require('./getPerson');
const replyWords = require('./replyWords');
const delBlogReplyWords = require('./delBlogReply');
const addArticleWords = require('./addArticleWords');
const addUser = require('./adduser');

const getBlogWords = require('./getBlogWords');

//获取所有留言
router.use('/getall',function(req,res,next){
    // console.log(req.body.id);
    allWords(db, blogSql, function(data){
        res.send(data);
    })
});
//删除一条博客留言
router.use('/delete',function(req,res,next){
    var id = req.body.id;
    deleteBlogWords(db, id, blogSql, function(data){
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
//回复一条留言
router.use('/replyperson',function(req,res,next){
    // console.log(req.body.id);
    replyWords(db, req.body.id , req.body.value, blogSql, function(data){
        res.send(data);
    })
});
//删除一条留言回复
router.use('/deletereply',function(req,res,next){
    // console.log(req.body.id);
    delBlogReplyWords(db, req.body.id, blogSql, function(data){
        res.send(data);
    })
});
//增加一条留言
router.use('/addarticlewords',function(req,res,next){
    console.log(req.body);
    addArticleWords(db, req.body, blogSql, function(data){
        res.send(data);
    })
});
//增加一个留言者的信息
router.use('/adduser',function(req,res,next){
    // console.log(req.body);
    addUser(db, req.body.wordsName, req.body.wordsEmail, blogSql, function(data){
        res.send(data);
    })
});

//获得所有博客留言
router.use('/getblogwords',function(req,res,next){
    console.log(req.body);
    getBlogWords(db, blogSql, function(data){
        res.send(data);
    })
});


module.exports = router;
