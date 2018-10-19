/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/5
    Time: 18:55
*/
var register = function(db,name,password,common,callback) {
    var sq = "select * from user where userName = '" + name + "' ";
    db.query(sq,function(err,data) {
        if (err) {
            callback({
                'error': true,
                'result': '数据库出错'
            })
        } else {
            if (data.length !== 0) {
                callback({
                    'error': true,
                    'result': '用户名已经被注册'
                })
            } else {
                password = common.md5(password);
                sql = "insert into user values (null,'" + name + "','" + password + "')";
                db.query(sql, function (err, data) {
                    if (err) {
                        callback({
                            'error': true,
                            'result': '数据库出错'
                        })
                    } else {
                        // console.log(name);
                        var s = "select * from `user`";
                        db.query(s, function (err, data) {
                            // console.log(data);
                            if (err) {
                                callback({
                                    'error': true,
                                    'result': '数据库出错'
                                })
                            } else {
                                callback({
                                    'error': false,
                                    'result': JSON.parse(JSON.stringify(data))
                                })
                            }
                        })
                    }
                })
            }
        }
    });

};

module.exports = register;