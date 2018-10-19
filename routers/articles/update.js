/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/5
    Time: 15:51
*/
const updateArticle = function(db, articleInfo, callback){
    var sql = "update article set articleName = '" + articleInfo.name +"', articleType = '" + articleInfo.type +"', articleContent = '" + articleInfo.content +"' where articleId = '"+ articleInfo.id +"'";
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
module.exports = updateArticle;