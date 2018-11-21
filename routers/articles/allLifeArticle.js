/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/11/13
    Time: 21:49
*/
var allLifeArticle = function(db, blogSql, callback) {
    db.query(blogSql.allLifeArticle, [], function(err, data) {
        console.log(data);
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

module.exports = allLifeArticle;