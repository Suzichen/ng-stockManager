import { Injectable } from '@angular/core';

@Injectable()
export class StockService {

    constructor() { }

    public stocks:Stock[] = [
        new Stock( 21, "suzic", 124324, 2, "没有描述", ["haha","xixi"] ),
        new Stock( 12, "suc", 543535, 3, "没有描述", ["haha","xixi"] ),
        new Stock( 11, "ssdfsd", 545654, 1, "没有描述", ["haha","xixi"] ),
        new Stock( 5, "sdgdc", 865454, 4, "没有描述", ["haha","xixi"] ),
        new Stock( 3, "ssdfs", 123454, 3, "没有描述", ["haha","xixi"] )
    ];

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