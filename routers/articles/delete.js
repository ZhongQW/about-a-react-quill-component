/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/5
    Time: 15:51
*/
const deleteArticle = function(db, id, blogSql, callback){
    db.query(blogSql.delArticle, [id], function(err,data){
        if(err){
            callback({
                'error': true,
                'result': '数据库出错'
            })
        }else{
            var sql = "select * from article";
            db.query(sql, function(err,data){
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
        }
    })
};
module.exports = deleteArticle;