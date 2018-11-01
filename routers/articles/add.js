/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/5
    Time: 15:50
*/
const addArticle = function(db,title, type, value, blogSql, callback){
    db.query(blogSql.addArticle, [title, type, value],function(err,data){
        if(err){
            callback({
                'error': true,
                'result': '数据库出错'
            })
        }else{
            callback({
                'error': false,
                'result': '新增成功'
            })
        }
    })
};
 module.exports = addArticle;