import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'admin-stock-manage',
    templateUrl: './stock-manage.component.html',
    styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

    private stocks:Array<Stock>;

    constructor(
        public router: Router
    ) { }

    ngOnInit() {
        this.stocks = [
            new Stock( 21, "suzic", 124324, 2, "没有描述", ["haha","xixi"] ),
            new Stock( 12, "suzic", 543535, 3, "没有描述", ["haha","xixi"] ),
            new Stock( 11, "suzic", 545654, 1, "没有描述", ["haha","xixi"] ),
            new Stock( 5, "suzic", 865454, 4, "没有描述", ["haha","xixi"] ),
            new Stock( 3, "suzic", 123454, 3, "没有描述", ["haha","xixi"] )
        ];
    }

    create() {
        this.router.navigateByUrl('stock-form/0');
    }

    updata(stock:Stock) {
        this.router.navigateByUrl('stock-form/' + stock.id);
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