/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/31
    Time: 17:21
*/
const addArticleWords = function(db, info, blogSql, callback){
    db.query(blogSql.addArticleWords, [info.wordsId, info.articleId, info.wordsContent], function(err,data) {
        if (err) {
            callback({
                'error': true,
                'result': '数据库出错'
            })
        } else {
            callback({
                'error': false,
                'result': '发表评论成功'
            })
        }
    })
};
module.exports = addArticleWords;