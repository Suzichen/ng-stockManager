"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var ws_1 = require("ws");
var base_1 = require("./base");
var bodyParser = require("body-parser");
/**
 * --------------------------------------------
 * 股票相关的业务逻辑
 * --------------------------------------------
 */
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// 发送股票列表
app.get('/api/stock', function (req, res) {
    var result = STOCKS;
    var params = req.query;
    if (params.name) {
        // 过滤提取出name值相等的一条股票
        result = result.filter(function (stock) {
            return stock.name.indexOf(params.name) !== -1;
        });
    }
    // 发送查询结果
    res.json(result);
});
// 发送股票
app.get('/api/stock/:id', function (req, res) {
    // 查找并返回id相等的一条股票
    res.json(STOCKS.find(function (stock) { return stock.id == req.params.id; }));
});
// 接收表单修改数据
app.post('/api/updata', function (req, res) {
    var params = req.body;
    var stock = STOCKS
        .filter(function (stock) { return stock.id == params.code; })
        .map(function (stock) {
        stock.categories = params.categories;
        stock.desc = params.desc;
        stock.name = params.name;
        stock.price = params.price;
        stock.rating = params.rating;
    });
    return res.json(STOCKS);
});
// 测试接口
app.get('/test', function (req, res) {
    res.json(STOCKS);
});
// 启动股票数据服务器
var server = app.listen(3001, 'localhost', function () {
    console.log('服务器已启动：http://localhost:3001');
});
/**
 * --------------------------------------------
 * 消息推送相关的业务逻辑
 * --------------------------------------------
 */
// 定义webSocket服务器
var wsServer = new ws_1.Server({
    port: 8001
});
// 客户端列表
var subcriptions = new Set();
// 连接客户端
wsServer.on("connection", function (webSocket) {
    subcriptions.add(webSocket);
});
// 发送数据
setInterval(function () {
    subcriptions.forEach(function (ws) {
        var data = new base_1.Messages('Suzichen', '这是服务器自动发送的消息');
        if (ws.readyState === 1) {
            ws.send(JSON.stringify(data));
        }
        else {
            subcriptions.delete(ws);
        }
    });
}, 5000);
/**
 * --------------------------------------------
 * Mock数据
 * --------------------------------------------
 */
// 股票
var STOCKS = [
    new base_1.Stock(21, "第一支股票", 124324, 2, "没有描述", ["IT", "互联网"]),
    new base_1.Stock(12, "第二支股票", 543535, 3, "没有描述", ["金融"]),
    new base_1.Stock(11, "第三支股票", 545654, 1, "没有描述", ["互联网", "金融"]),
    new base_1.Stock(5, "第四支股票", 865454, 4, "没有描述", ["医疗"]),
    new base_1.Stock(3, "第五支股票", 123454, 3, "没有描述", ["互联网"]),
    new base_1.Stock(6, "第六支股票", 496038, 3, "没有描述", ["互联网", "教育"]),
    new base_1.Stock(20, "第七支股票", 692650, 5, "没有描述", ["教育"]),
    new base_1.Stock(19, "第八支股票", 640673, 4, "没有描述", ["金融", "医疗"])
];
