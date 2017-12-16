import * as express from "express";
import { Server } from "ws";
import { Stock, Messages } from './base';

var bodyParser = require("body-parser");

/**
 * --------------------------------------------
 * 股票相关的业务逻辑
 * --------------------------------------------
 */
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// 发送股票列表
app.get('/api/stock', (req, res) => {
    let result = STOCKS;
    let params = req.query;
    if (params.name) {
        // 过滤提取出name值相等的一条股票
        result = result.filter(
            stock => 
                stock.name.indexOf(params.name) !== -1
        )
    }
    // 发送查询结果
    res.json(result);
})

// 发送股票
app.get('/api/stock/:id', (req, res) => {
    // 查找并返回id相等的一条股票
    res.json(STOCKS.find(
        stock => stock.id == req.params.id
    ))
})

// 接收表单修改数据
app.post('/api/updata', (req, res) => {
    let params = req.body;
    let stock = STOCKS
        .filter( stock => stock.id == params.code )
        .map( stock => {
            stock.categories = params.categories;
            stock.desc = params.desc;
            stock.name = params.name;
            stock.price = params.price;
            stock.rating = params.rating;
        });
    return res.json(STOCKS)
})

// 测试接口
app.get('/test', (req, res) => {
    res.json(STOCKS)
})

// 启动股票数据服务器
const server = app.listen(3001, 'localhost', () => {
    console.log('服务器已启动：http://localhost:3001')
})

/**
 * --------------------------------------------
 * 消息推送相关的业务逻辑
 * --------------------------------------------
 */

// 定义webSocket服务器
const wsServer = new Server({
    port: 8001
})

// 客户端列表
const subcriptions = new Set<any>()

// 连接客户端
wsServer.on("connection", webSocket => {
    subcriptions.add(webSocket)
})

// 发送数据
setInterval(() => {
    subcriptions.forEach(ws => {

        let data: Messages = new Messages('Suzichen', '这是服务器自动发送的消息')

        if (ws.readyState === 1) {
            ws.send(JSON.stringify(data))
        } else {
            subcriptions.delete(ws);
        }

    })
}, 5000)

/**
 * --------------------------------------------
 * Mock数据
 * --------------------------------------------
 */
// 股票
const STOCKS:Stock[] = [
    new Stock( 21, "第一支股票", 124324, 2, "没有描述", ["IT","互联网"] ),
    new Stock( 12, "第二支股票", 543535, 3, "没有描述", ["金融"] ),
    new Stock( 11, "第三支股票", 545654, 1, "没有描述", ["互联网","金融"] ),
    new Stock( 5, "第四支股票", 865454, 4, "没有描述", ["医疗"] ),
    new Stock( 3, "第五支股票", 123454, 3, "没有描述", ["互联网"] ),
    new Stock( 6, "第六支股票", 496038, 3, "没有描述", ["互联网","教育"] ),
    new Stock( 20, "第七支股票", 692650, 5, "没有描述", ["教育"] ),
    new Stock( 19, "第八支股票", 640673, 4, "没有描述", ["金融","医疗"] )
];