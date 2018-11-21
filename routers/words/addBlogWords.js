/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/11/13
    Time: 22:16
*/
const addBlogWords = function(db, user_id, wordsContent, blogSql, callback){
    console.log(user_id);
    console.log(wordsContent);
    db.query(blogSql.addBlogWords, [user_id, wordsContent], function(err,data) {
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
module.exports = addBlogWords;