/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/11/2
    Time: 14:05
*/
var articleDelReply = function(db,wordsId, articleId, blogSql, callback) {
    db.query(blogSql.articleDelReply, [wordsId], function(err, data) {
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

module.exports = articleDelReply;