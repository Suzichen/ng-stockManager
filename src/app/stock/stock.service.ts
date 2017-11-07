import { Injectable } from '@angular/core';

@Injectable()
export class StockService {

    constructor() { }

    private stocks:Stock[] = [
        new Stock( 21, "第一支股票", 124324, 2, "没有描述", ["IT","互联网"] ),
        new Stock( 12, "第二支股票", 543535, 3, "没有描述", ["金融"] ),
        new Stock( 11, "第三支股票", 545654, 1, "没有描述", ["互联网","金融"] ),
        new Stock( 5, "第四支股票", 865454, 4, "没有描述", ["医疗"] ),
        new Stock( 3, "第五支股票", 123454, 3, "没有描述", ["互联网","教育"] )
    ];

    public getStocks():Stock[] {
        return this.stocks;
    }

    public getStock(id:number):Stock {
        let stock:Stock = this.stocks.find(stock=> stock.id == id);
        if (!stock) {
            stock = new Stock( 0, "初始股票", 0, 0, "没有描述", [] );
        }
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