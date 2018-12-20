//app.js文件

//1.引入express模块
const express = require('express');

const note = require('./router/api')
const mongoose = require("mongoose");

const bodyParser = require("body-parser")


//2.创建app对象
const app = express()
//定义简单路由
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api',note);
app.listen(3000,() => {
    console.log('app listening on port 3000.')
})