create table user(
    userId int not null auto_increment  PRIMARY KEY,
    userName varchar(40) not null,
    userPassword varchar(70) not null
);
create table article(
    articleId int not null PRIMARY KEY auto_increment,
    articleName char(40) not null,
    articleType char(4) not null,
    articleTime TIMESTAMP  not null DEFAULT CURRENT_TIMESTAMP,
    articleVisit int(11) not null default 0,
    articleLover int(11) not null default 0,
    articleWords int(11) not null default 0,
    articleContent text not null
);
create table words(
    wordsId int not null auto_increment  PRIMARY KEY,
    wordsName varchar(40) not null,
    wordsEmil varchar(30) not null,
    wordsType varchar(4) not null,
    wordsContent text not null
);
create table owner(
    nickname  varchar(50) not null,
    name varchar(50) not null,
    titile varchar(70) not null,
    birth date not null,
    sex varchar(12) not null check(sex in ('男','女')),
    email varchar(60) not null,
    job varchar(50) not null,
    address varchar(100) not null,
    motto varchar(200) not null
);
insert into article values(NULL, '花香酒气', '日记', 34, 12, 12, '哈哈哈哈哈，这是一篇日记！！！');
insert into article values(NULL, 'java类的继承', '技术文章', 23, 13, 32, '哈哈哈哈哈，这是一篇技术文章！！！');
insert into article values(NULL, 'CSS3的学习分享', '技术文章', 4, 32, 10, '哈哈哈哈哈，这是一篇技术文章！！！');
insert into article values(NULL, '记第一次当志愿者', '日记', 39, 122, 112, '哈哈哈哈哈，这是一篇日记！！！');
insert into article (articleId, articleName, articleType, articleContent) values(NULL, '开学第一天', '日记', '哈哈哈哈哈，这是一篇日记！！！');