/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/5
    Time: 18:01
*/
var get = function(db, callback) {
    var sql = 'select * from `owner`';
    db.query(sql, function(err, data) {
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

module.exports = get;