/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/5
    Time: 17:53
*/
const deleteBlogWords = function(db, id, blogSql, callback){
    db.query(blogSql.deleteBlogWords, [id], function(err,data){
        if(err){
            callback({
                'error': true,
                'result': '数据库出错'
            })
        }else{
            db.query(blogSql.getAllBlogWords, [], function(err,data){
                if(err){
                    callback({
                        'error': true,
                        'result': '数据库出错'
                    })
                }else{
                    callback({
                        'error': false,
                        'result' : JSON.parse(JSON.stringify(data))
                    })
                }
            })
        }
    })
};
module.exports = deleteBlogWords;