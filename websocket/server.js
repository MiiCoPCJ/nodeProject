var express = require('express'),
    list = require('./request.js').Request; // see  template

var app = express();

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.use(express.static(__dirname + '/public')); // exposes index.html, per below
//app.use(express.static('E:/Server/data/htdocs/pre/instant/frontend/views/Okex/'));

app.get('/request', function(req, res){
    // run your request.js script
    // when index.html makes the ajax call to www.yoursite.com/request, this runs
    // you can also require your request.js as a module (above) and call on that:
    console.log(list.prototype.getList());
    res.send(list.prototype.getList()); // try res.json() if getList() returns an object or array
});

app.listen(876);
