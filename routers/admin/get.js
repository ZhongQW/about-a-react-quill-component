/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/13
    Time: 21:46
*/
var get = function(db, common, callback) {
    var sql = "select * from `user`";
    db.query(sql, function(err, data) {
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

module.exports = get;