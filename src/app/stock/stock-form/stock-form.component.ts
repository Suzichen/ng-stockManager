import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock-manage/stock-manage.component';

@Component({
    selector: 'admin-stock-form',
    templateUrl: './stock-form.component.html',
    styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

    private stock: Stock;

    constructor() { }

    ngOnInit() {
        this.stock = new Stock( 21, "suzic", 124324, 2, "没有描述", ["haha","xixi"] )
    }

}
