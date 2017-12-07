import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class StockService {

    constructor(
        private http: HttpClient
    ) { }

    public getStocks(): Observable<any> {
        let stocks = this.http
            .get('mock-data/stocks-mock.json')
            .map((response) => {
                return response.result;
            })
        return stocks;
    }

    public getStock(id:number): Observable<any> {
        let stock = this.http
            .get('mock-data/stock-mock.json')
            .map((response) => {
                return response.result;
            })
        return stock;
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