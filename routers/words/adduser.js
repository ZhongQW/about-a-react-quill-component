/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/31
    Time: 17:21
*/
const addUser = function(db, wordsName, wordsEmail, blogSql, callback){
    db.query(blogSql.addPerson, [wordsName, wordsEmail], function(err,data){
        if(err){
            callback({
                'error': true,
                'result': '数据库出错'
            })
        }else{
            db.query(blogSql.selectPerson, [wordsName], function(err,data){
                // console.log(data);
                if(err){
                    callback({
                        'error': true,
                        'result': '数据库出错'
                    })
                }else{
                    callback({
                        'error': false,
                        'result': JSON.parse(JSON.stringify(data))
                    })
                }
            })
        }
    })
};
module.exports = addUser;