create database blog;
use blog;
create table user(
    userId int not null auto_increment  PRIMARY KEY,
    userName varchar(40) not null,
    userPassword varchar(70) not null
);
insert into user values (NULL, 'zhongqw_00', 'b2377a90c58c35dbdb9ec5cb35ac9797');
insert into user values (NULL, 'zhongqw', 'e24ee506d6dddf6d5131ecd2a2645a73');
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
    FOREIGN KEY (articleId) REFERENCES article(articleId) ON DELETE CASCADE
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
insert into article (articleId, articleType, articleTitle,  articleContent) values(NULL, 100, 'java类的继承', '这是java 类的继va 类的继va 类的继va 类的继va 类的继va 类的继va 类的继va 类的继va 类的继va 类的继va 类的继va 类的继va 类的继va 类的继va 类的继va 类的继va 类的继va 类的继va 类的继va 类的继va 类的继va 类的继va 类的继va 类的继va 类的继va 类的继va 类的继va 类的继承！');
insert into article (articleId, articleType, articleTitle,  articleContent) values(NULL, 100, '技术闲谈', '今天无意中在工作邮箱翻到了一封邮件，说的是2017年底php-memcached扩展的一个安全漏洞（具体可见https://github.com/php-memcached-dev/php-memcached/issues/339），由于当时线上业务并没受影响，所以就没太关注。今天突然发现自己开发机使用的还是php-memcache扩展，所以就升级了一下（centos/apache/php5.6环境）。php-memcached和php-memcache扩展都是php的memcached客户端扩展，仅有一字之差，建议使用php-memcached扩展，关于两者的比较，后续有机会我再学习。在开发机升级后，就顺带在自己的阿里云ECS上也升级了下（ubuntu/php7.1）,事情虽小，但自己也学习了很多，主要包括pecl、libmemcachd、phpize等知识，然后写下了此文。
                                                                                                       libmemcachd版本和php-memcached版本
                                                                                                       php-memcached扩展是基于libmemcached开发的，核心的功能都来源于libmemcached，libmemcachd是一个C语言开发的库，这个库比较稳定，最新的版本是2014年发布的1.0.18。
                                                                                                       php-memcached不管是源代码编译还是包安装，基本上都是由PECL（https://pecl.php.net/package/memcached，/usr/share/doc/php-memcached/README.markdown）提供的，主要分为两个版本：
                                                                                                       3.x版本：提供给php5.6以上的版本（包括php7）使用，依赖libmemcached 1.x以上的版本。
                                                                                                       2.x版本：提供给php5.6一下的版本使用，依赖libmemcached 0.44以上的版本。
                                                                                                       至于什么是PECL，它其实类似于PHP的扩展软件安装库，也类似于apt-get这样的软件安装工具，只是PECL安装的是php扩展（大部分是.so文件）。
                                                                                                       PECL安装php-memcached
                                                                                                       在开发机上，我尝试使用pecl安装，由于php环境是5.6，所以安装的是php-memcached 2.x版本，运行一个命令即可：
                                                                                                       # 自动安装libmemcached依赖
                                                                                                       $ pecl install php-memcached-2.0.0
                                                                                                       这个命令隐藏了很多细节，相当于执行如下指令：！');
insert into article (articleId, articleType, articleTitle,  articleContent) values(NULL, -1, '悲惨世界', '一本书的影评！');

insert into articleWords (wordsArticleId, wordsPersonId, articleId, wordsContent) values(NULL, 1, 8, '写的真好！');
insert into articleWords (wordsArticleId, wordsPersonId, articleId, wordsContent, wordsReply) values (NULL, 2, 8, '加油哦，博主！', '哈哈哈哈，谢谢你哦！');
insert into articleWords (wordsArticleId, wordsPersonId, articleId, wordsContent) values (NULL, 1, 12, '加油哦，博主！');
insert into articleWords (wordsArticleId, wordsPersonId, articleId, wordsContent) values (NULL, 1, 13, '厉害哦，博主！');
insert into articleWords (wordsArticleId, wordsPersonId, articleId, wordsContent) values (NULL, 2, 14, '哈哈！');

insert into blogWords (wordsBlogId, wordsPersonId, wordsContent) values(NULL, 1, '加油哦！');
insert into blogWords (wordsBlogId, wordsPersonId, wordsContent) values (NULL, 2, '博主写的很好，博主继续加油！');

insert into wordsPerson values(NULL, 'zhongqw', '2208982655@qq.com');
insert into wordsPerson values(NULL, 'liuqin', '2201112655@qq.com');
insert into wordsPerson values(NULL, 'yanghao', '2787285513@qq.com');

insert into owner (id, nickname, name, title, birth, sex, email, job, address, motto) values(123, '小o', '钟倩文', '花气袭人是酒香', '1999-01-06', '女', '2208982655@qq.com', '前端工程师', '陕西西安', '请相信这世界上真有人过着你想要的生活！');