/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/14
    Time: 15:24
*/
var del = function(db, id, blogSql, callback) {
    db.query(blogSql.delLogin,[id], function(err, data) {
        if(err) {
            callback({
                'error' : true,
                'result' : '数据库出错'
            })
        }else {
            var sq = "select * from `user`";
            db.query(sq, function(err, data) {
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
            });
        }
    })
};

module.exports = del;