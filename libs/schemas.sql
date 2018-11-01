create database blog;
use blog;
create table user(
    userId int not null auto_increment  PRIMARY KEY,
    userName varchar(40) not null,
    userPassword varchar(70) not null
);
insert into user values (NULL, 'zhongqw_00', '123qwe');
insert into user values (NULL, 'zqw', '123qwe');
create table article(
    articleId int not null PRIMARY KEY auto_increment,
    articleType varchar(4) not null,
    articleTitle varchar(200) not null,
    articleTime TIMESTAMP  not null DEFAULT CURRENT_TIMESTAMP,
    articleVisit int(11) not null default 0,
    articleLover int(11) not null default 0,
    articleWordsAmount int(11) not null default 0,
    articleContent text not null
);
create table articleWords(
    wordsArticleId int not null auto_increment  PRIMARY KEY,
    wordsPersonId int not null,
    articleId int not null,
    wordsContent text not null,
    wordsTime TIMESTAMP  not null DEFAULT CURRENT_TIMESTAMP,
    wordsReply text default null,
    FOREIGN KEY (wordsPersonId) REFERENCES wordsPerson(wordsPersonId),
    FOREIGN KEY (articleId) REFERENCES article(articleId)
);
create table blogWords(
    wordsBlogId int not null auto_increment  PRIMARY KEY,
    wordsPersonId int not null,
    wordsContent text not null,
    wordsTime TIMESTAMP  not null DEFAULT CURRENT_TIMESTAMP,
    wordsReply text default null,
    FOREIGN KEY (wordsPersonId) REFERENCES wordsPerson(wordsPersonId)
);
create table wordsPerson(
    wordsPersonId int not null auto_increment  PRIMARY KEY,
    wordsPersonName varchar(40) not null,
    wordsPersonEmail varchar(30) not null
);
create table owner(
    id int not null PRIMARY KEY,
    nickname  varchar(50) not null,
    name varchar(50) not null,
    title varchar(70) not null,
    birth varchar(30) not null,
    sex varchar(12) not null check(sex in ('男','女')),
    email varchar(60) not null,
    job varchar(50) not null,
    address varchar(100) not null,
    motto varchar(200) not null
);
insert into article (articleId, articleType, articleTitle,  articleContent) values(NULL, 1, 'java类的继承', '这是java 类的继承！');
insert into article (articleId, articleType, articleTitle,  articleContent) values(NULL, 2, '日记', '这是日记！');
insert into article (articleId, articleType, articleTitle,  articleContent) values(NULL, 1, '技术闲谈', '这是技术闲谈！');
insert into article (articleId, articleType, articleTitle,  articleContent) values(NULL, 1, '悲惨世界', '一本书的影评！');

insert into articleWords (wordsArticleId, wordsPersonId, articleId, wordsContent) values(NULL, 1, 2, '写的真好！');
insert into articleWords (wordsArticleId, wordsPersonId, articleId, wordsContent) values (NULL, 2, 1, '加油哦，博主！');
insert into articleWords (wordsArticleId, wordsPersonId, articleId, wordsContent) values (NULL, 1, 3, '加油哦，博主！');
insert into articleWords (wordsArticleId, wordsPersonId, articleId, wordsContent) values (NULL, 1, 2, '厉害哦，博主！');
insert into articleWords (wordsArticleId, wordsPersonId, articleId, wordsContent) values (NULL, 2, 1, '哈哈！');

insert into blogWords (wordsBlogId, wordsPersonId, wordsContent) values(NULL, 1, '加油哦！');
insert into blogWords (wordsBlogId, wordsPersonId, wordsContent) values (NULL, 2, '博主写的很好，博主继续加油！');

insert into wordsPerson values(NULL, 'zhongqw', '2208982655@qq.com');
insert into wordsPerson values(NULL, 'liuqin', '2201112655@qq.com');
insert into wordsPerson values(NULL, 'yanghao', '2787285513@qq.com');

insert into owner (id, nickname, name, title, birth, sex, email, job, address, motto) values(123, '小o', '钟倩文', '花气袭人是酒香', '1999-01-06', '女', '2208982655@qq.com', '前端工程师', '陕西西安', '请相信这世界上真有人过着你想要的生活！');
select wordsBlogId, wordsPersonName, wordsPersonEmail, wordsTime, wordsContent, wordsReply from wordsPerson, blogWords where wordsPerson.wordsPersonId = blogWords.wordsPersonId;
update owner set nickname='12', name='123', title='243242', birth='1999-01-05T16:00:00.000Z', sex='男', email='22208982544@qq.com', job='前端', address='陕西榆林', motto='32321' where id=123;
select  wordsPersonName, wordsPersonEmail, wordsArticleId, wordsContent, wordsTime, wordsReply from wordsperson, articlewords where  wordsperson.wordsPersonId = articlewords.wordsPersonId and articlewords.articleId = 1;
