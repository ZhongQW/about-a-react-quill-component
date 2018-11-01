/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/25
    Time: 21:41
*/
const oneArticleText = function(db,id,blogSql,callback) {
    db.query(blogSql.oneArticleText, [id], function(err,data){
        // console.log(data);
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
};

module.exports = oneArticleText;