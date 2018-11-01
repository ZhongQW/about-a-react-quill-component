/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/5
    Time: 18:55
*/
var login = function(db,name,password,common, callback) {
    password = common.md5(password);
    // console.log(password);
    var sql = "select * from user where userName = '" +name+ "' ";
    db.query(sql, function(err, data) {
        if(err) {
            callback({
                'error' : true,
                'result' : '数据库出错'
            })
        }else {
            if(!data[0]){
                callback({
                    'error' : true,
                    'result' : '用户名不存在'
                })
            }else if(password === data[0].userPassword){
                callback({
                    'error' : false,
                    'result' : '登录成功'
                })
            }else{
                callback({
                    'error' : true,
                    'result' : '密码错误'
                })
            }
        }
    })
};

module.exports = login;