/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/5
    Time: 15:51
*/
const updateArticle = function(db, id, content, title, type, blogSql, callback){
    db.query(blogSql.updateArticleInfo, [content, title, type, id], function(err,data){
        // console.log(data);
        if(err){
            callback({
                'error': true,
                'result': '数据库出错'
            })
        }else{
            db.query(blogSql.updateArticle, [id], function(err,data){
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
        }
    })
};
module.exports = updateArticle;