const http = require('http');
const express = require('express');
const cors = require('cors');
const app = express();

app.set('port', 5000);

app.use('/', cors());

const phoneList = [
    {no:'1', name:'오탁근', phone:'010-1111-1111', email:'bread1@naver.com'},
    {no:'2', name:'염정아', phone:'010-1111-2222', email:'bread2@naver.com'},
    {no:'3', name:'정승호', phone:'010-1111-3333', email:'bread3@naver.com'},
    {no:'4', name:'권석준', phone:'010-1111-4444', email:'bread4@naver.com'},
];

app.get("/phone/list", (req, res)=> {
    res.send(phoneList);
});

app.get("/phone/input", (req, res) => {
    let newData = {
        no : req.query.no,
        name : req.query.name,
        phone : req.query.phone,
        email : req.query.email
    }

    console.log(newData);
    phoneList.push(newData);
    res.send(phoneList);
})

app.get("/phone/delete", (req, res) => {
    let delNo = req.query.no;

    for(var i=0;i<phoneList.length;i++) {
        if(delNo===phoneList[i].no) {
            phoneList.splice(i,1);
            return;
        }
    }
    
    res.send(phoneList);
})

const server = http.createServer(app);

server.listen(app.get('port'), ()=> {
    console.log(`http://localhost:${app.get('port')}`);
})