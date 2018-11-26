/*
    Create by WebStorm.
    User: ZhongQw
    Date: 2018/10/5
    Time: 11:50
*/

const express = require('express');
const swig = require('swig');
const bodyParser = require('body-parser');
const app = express();

const admin = require('./routers/admin/admin');
const article = require('./routers/articles/article');
const words = require('./routers/words/words');
const owner = require('./routers/owner/owner');

//解析post数据
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//静态文件托管
app.use('/public',express.static(__dirname+'/public'));
/*app.get('/main.css',function(req,res,next){
    res.setHeader('content-type','text/css');
    res.send('body{background: red;}');
});*/

//配置模板引擎
app.engine('html',swig.renderFile);
//设置模板引擎的目录
app.set('views','./views');
//注册所使用的模板引擎
app.set('view engine','html');
//取消模板引擎
swig.setDefaults({cache: false});
//首页
app.get('/',function(req,res,next){
    res.render('index');
});

app.all("*",function(req,res,next){
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","content-type");
    //跨域允许的请求方式
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
        res.sendStatus(200);  //让options尝试请求快速结束
    else
        next();
});

//路由
app.use('/admin',admin);
app.use('/article',article);
app.use('/words',words);
app.use('/owner',owner);

app.listen(8888);
console.log('run at localhost:8888');