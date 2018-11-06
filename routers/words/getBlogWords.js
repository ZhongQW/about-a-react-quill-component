/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/11/5
    Time: 21:26
*/
const getBlogWords = function(db, blogSql, callback){
    db.query(blogSql.getBlogWords, [], function(err,data) {
        if (err) {
            callback({
                'error': true,
                'result': '数据库出错'
            })
        } else {
            callback({
                'error': false,
                'result': JSON.parse(JSON.stringify(data))
            })
        }
    })
};
module.exports = getBlogWords;