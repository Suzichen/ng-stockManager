import { Component, OnInit } from '@angular/core';
import { StockService, Stock } from '../stock.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'admin-stock-form',
    templateUrl: './stock-form.component.html',
    styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

    private stock: Stock;

    constructor(
        private stockService: StockService,
        private router: Router,
        private routerIfo:ActivatedRoute
    ) { }

    ngOnInit() {
        let stockId = this.routerIfo.snapshot.params['id'];
        this.stock = this.stockService.getStock(stockId);
    }

    cancel() {
        this.router.navigateByUrl('/stock')
    }
    save() {
        this.router.navigateByUrl('/stock')
    }
}
