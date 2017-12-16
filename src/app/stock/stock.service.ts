import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class StockService {

    constructor(
        private http: HttpClient
    ) { }

    public getStocks(): Observable<any> {
        return this.http
            .get<StockResponse>('mock-data/stocks-mock.json')
            .map((response) => {
                return response.result;
            });
    }

    public getStock(id:number): Observable<any> {
        // 解决chrome浏览器在静态主机解析路径不正确的bug
        let isChrome = navigator.userAgent.indexOf("Chrome") > -1;
        let url = isChrome? './mock-data/stocks-mock.json': 'mock-data/stocks-mock.json';
        return this.http
            .get<StockResponse>(url)
            .map((response) => {
                return response.result
                    .find((stock) => {
                        return stock.id == id;
                    });
            });
    }

}

export class Stock {
    constructor(
        public price:number,
        public name:string,
        public id:number,
        public rating:number,
        public desc:string,
        public categories:Array<string>
    ) {}
}

// 定义响应体返回的数据类型
interface StockResponse {
    result: Stock[];
}