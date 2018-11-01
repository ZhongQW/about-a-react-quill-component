/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/24
    Time: 19:50
*/
/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/24
    Time: 18:51
*/
const delBlogReply = function (db, id, blogSql, callback) {
    db.query(blogSql.delBlogReply, [id], function(err, data){
        // console.log(data);
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
module.exports = delBlogReply;