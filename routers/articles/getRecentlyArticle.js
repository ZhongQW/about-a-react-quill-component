/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/11/26
    Time: 14:35
*/
const getRecentlyArticle = function(db, blogSql, callback){
    db.query(blogSql.recentArticle, [], function(err, data){
        if(err){
            callback({
                'error': true,
                'result': '数据库出错'
            })
        }else{
            callback({
                'error': false,
                'result': JSON.parse(JSON.stringify(data))
            })
        }
    })
};
module.exports = getRecentlyArticle;