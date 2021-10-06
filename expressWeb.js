const express = require('express');
const app = express();
const  mysql = require('mysql');
// 设置跨域访问，不然的话，会带来同源策略的一些问题
// 这个方法不是太好，以后有好的可以更换一下
var message = [
    {
        status:200,
        information:"welcome to you!"
    },
    {
        name:"chony",
        password:"123456"
    }

]
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
 });
app.listen(8080);
app.get("/",function(req,res){
    const connection = mysql.createConnection({
        host : '127.0.0.1',
        user : 'root',
        password: '123456', 
        database: 'login'            // 服务器端编程还是需要严格遵守命名规范的
    });
    if(req.query !==undefined){
        let sql = `select * from loginSet where user = '${req.query.user}'`;
        connection.query(sql,function(err,result){
        if(err){
            console.log('[select error] - ',err.message);
            return;
        }
        if(result.length===0){
            console.log("账号不存在")
        }
        for(let i=0;i<result.length;i++){
            if(result[i].password===req.query.password){
                console.log("欢迎登录")
            }          
        }
        });
   
         res.status(200);
         res.json(message);   // 向前端html页面返回信息的部分
         // 上面两句代码需要更换位置，它会在访问localhost:8080时会直接有返回值
    }
    connection.end();     
    
})


