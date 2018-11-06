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
const oneArticleText = require('./oneArticleText');

const getWords = require('./getwords');
const articleDelWords = require('./articleDelWords');
const articleReplyWords = require('./articleReplyWords');
const articleDelReply = require('./articleDelReply');

//增加文章
router.use('/add',function(req,res,next){
    // console.log(req.body);
    addArticle(db, req.body.title, req.body.type, req.body.value, blogSql, function(data){
        res.send(data);
    })
});
//获取所有文章
router.use('/getall',function(req,res,next){
    allArticle(db,function(data){
        // console.log(data);
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
    // console.log(req.body.val);
    updateArticle(db, req.body.id,req.body.val , blogSql,  function(data){
        res.send(data);
    })
});
//获取某一篇文章
router.use('/getone',function(req,res,next){
    var id = req.body.id;
    // console.log(req.body.id);
    oneArticle(db,id,blogSql,function(data){
        res.send(data);
    })
});
//获取某一篇文章的内容
router.use('/getonetext',function(req,res,next){
    var id = req.body.id;
    // console.log(id);
    oneArticleText(db,id,blogSql,function(data){
        // console.log(data);
        res.send(data);
    })
});

//得到某一个文章下所有的留言
router.use('/getwords',function(req,res,next){
    // console.log(req.body);
    getWords(db, req.body.id, blogSql, function(data){
        // console.log(data);
        res.send(data);
    })
});
//删除某一篇文章的某一条留言
    router.use('/articledelwords',function(req,res,next){
        const wordsId = req.body.wordsId;
        const articleId = req.body.articleId;
        articleDelWords(db, wordsId, articleId, blogSql,function(data){
        // console.log(data);
        res.send(data);
    })
});
//回复某一篇文章的某一条留言
router.use('/articlereplywords',function(req,res,next){
    // console.log(req.body);
    const wordsId = req.body.wordsId;
    const replyValue = req.body.replyValue;
    const articleId = req.body.articleId;
    articleReplyWords(db, wordsId, articleId,replyValue, blogSql,function(data){
        // console.log(data);
        res.send(data);
    })
});
//删除某一篇文章的某一条留言的回复
router.use('/articledelreply',function(req,res,next){
    const wordsId = req.body.wordsId;
    const articleId = req.body.articleId;
    articleDelReply(db, wordsId, articleId, blogSql, function(data){
        // console.log(data);
        res.send(data);
    })
});

module.exports = router;
