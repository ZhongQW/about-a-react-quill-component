/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/13
    Time: 18:15
*/
let BlogSQL = {
    modifyOwner: "update owner set nickname=?, name=?, title=?, " +
    "age=?, sex=?, email=?, job=?, address=?, motto=? " +
    "where  id= 123",
    delLogin: "delete from user where userId =?",
    delArticle: "delete from article where articleId=?",
    updateArticle: "select articleContent from article where articleId=?"
};

module.exports = BlogSQL;