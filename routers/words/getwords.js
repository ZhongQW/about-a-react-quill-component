/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/31
    Time: 17:21
*/
var oneArticle = function(db,id,blogSql,callback) {
    db.query(blogSql.getArticleWords, [id], function(err,data){
        console.log(JSON.parse(JSON.stringify(data)));
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
};

module.exports = oneArticle;