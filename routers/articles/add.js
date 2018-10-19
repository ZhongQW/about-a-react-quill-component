/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/5
    Time: 15:50
*/
const addArticle = function(db,articleInfo, callback){
    var sql = "insert into article (articleId, articleName, articleType, articleContent) values (NULL,'" + articleInfo.name +"', '" + articleInfo.type +"','" + articleInfo.content + "')";
    db.query(sql,function(err,data){
        if(err){
            callback({
                'error': true,
                'result': '数据库出错'
            })
        }else{
            callback({
                'error': false,
                'result': '修改成功'
            })
        }
    })
};
 module.exports = addArticle;