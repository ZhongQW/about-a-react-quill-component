/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/11/21
    Time: 16:47
*/
var getGoodArticle = function(db, blogSql, callback) {
    db.query(blogSql.getGoodArticle, [], function(err, data) {
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

module.exports = getGoodArticle;
