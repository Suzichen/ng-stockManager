import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockService, Stock } from '../stock.service';

@Component({
    selector: 'admin-stock-manage',
    templateUrl: './stock-manage.component.html',
    styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

    private stocks:Array<Stock>;

    constructor(
        private router: Router,
        private stockService:StockService
    ) { }

    ngOnInit() {
        this.stocks = this.stockService.stocks
    }

    create() {
        this.router.navigateByUrl('stock-form/0');
    }

    updata(stock:Stock) {
        this.router.navigateByUrl('stock-form/' + stock.id);
    }

}