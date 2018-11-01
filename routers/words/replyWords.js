/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/24
    Time: 18:51
*/
const replyWords = function (db, id, content, blogSql, callback) {
    // console.log(id + content );
    db.query(blogSql.replyBlogWords, [content, id], function(err, data){
        if(err){
            callback({
                'error': true,
                'result': '数据库出错'
            })
        }else{
            db.query(blogSql.getAllBlogWords, [], function(err, data) {
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
        }
    })
};
module.exports = replyWords;