/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/5
    Time: 18:01
*/
var update = function(db,ownInfo, blogSql, callback) {
    db.query(blogSql.modifyOwner,[
        ownInfo.nickname, ownInfo.name, ownInfo.title,
        ownInfo.age, ownInfo.sex, ownInfo.email,
        ownInfo.job, ownInfo.address, ownInfo.motto
    ], function(err, data) {
        if(err) {
            callback({
                'error' : true,
                'result' : '数据库出错'
            })
        }else {
            callback({
                'error' : false,
                'result' : '修改成功'
            })
        }
    })
};

module.exports = update;