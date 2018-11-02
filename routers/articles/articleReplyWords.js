/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/11/2
    Time: 14:04
*/
var articleReplyWords = function(db, wordsId, articleId,  replyValue, blogSql, callback) {
    db.query(blogSql.articleReplyWords, [replyValue, wordsId],  function(err, data) {

        if(err) {
            callback({
                'error' : true,
                'result' : '数据库出错'
            })
        }else {
            db.query(blogSql.getArticleWords, [articleId], function(err,data){
                // console.log(JSON.parse(JSON.stringify(data)));
                if(err) {
                    callback({
                        'error' : true,
                        'result' : '数据库出错'
                    })
                }else {
                    callback({
                        'error' : false,
                        'result' : JSON.parse(JSON.stringify(data))
                    })
                }
            })
        }
    })
};

module.exports = articleReplyWords;