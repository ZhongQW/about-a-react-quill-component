/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/5
    Time: 17:53
*/
const deleteWords = function(db,id,callback){
    var sql = "UPDATE `words` SET wordsType = 0 WHERE `wordsType` = ?";
    db.query(sql,function(err,data){
        if(err){
            callback({
                'error': true,
                'result': '数据库出错'
            })
        }else{
            callback({
                'error': false,
                'result': '删除成功'
            })
        }
    })
};
module.exports = deleteWords;