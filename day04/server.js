const http = require('http');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/', function(req, res) {
    console.log(">>> GET - / 요청 받음 ...");
    res.end("<h1>Hello nodejs</h1>");
});

app.get('/hello_ko', function(req, res) {
    console.log(">>> GET - /data 요청 받음 ...");
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    res.write("<h2>길동이의 홈페이지</h2>");
    res.end();
});

app.get('/data', function(req, res) {
    console.log(">>> GET - /data 요청 받음 ...");
    // localhost:3000/data?user=KIM&message=HELLO
    let resData = {
        "user": req.query.user, 
        "message": req.query.message
    }
    // res.end() : 문자열 처리
    // res.send() : 객체 처리
    res.send(resData);
});

app.get("/calc/:num1/:num2/:oper", (req, res)=>{
    console.log("GET - /calc/:num1/:num2/:oper");
    let num1 = Number(req.params.num1);
    let num2 = Number(req.params.num2);
    let resultValue = 0;
    switch(req.params.oper) {
    case "plu" : resultValue = num1 + num2; break;
    case "min" : resultValue = num1 - num2; break;
    case "mul" : resultValue = num1 * num2; break;
    case "div" : resultValue = num1 / num2; break;
    case "mod" : resultValue = num1 % num2;
    }
    res.send({resultValue});
});

const server = http.createServer(app);
server.listen(3000, function() {
    console.log("서버 실행 중>>> http://localhost:3000");
});