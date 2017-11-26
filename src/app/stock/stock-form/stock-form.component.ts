import { Component, OnInit } from '@angular/core';
import { StockService, Stock } from '../stock.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
    selector: 'admin-stock-form',
    templateUrl: './stock-form.component.html',
    styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

    private stock: Stock;
    public form: FormGroup;
    public categories: Array<string> = ['IT','互联网','金融','医疗','教育']

    constructor(
        private stockService: StockService,
        private router: Router,
        private routerIfo:ActivatedRoute,
        private fb: FormBuilder
    ) { }

    ngOnInit() {
        let stockId = this.routerIfo.snapshot.params['id'];
        this.stock = this.stockService.getStock(stockId);
        // 构建表单
        this.buildForm();
    }

    buildForm() {
        this.form = this.fb.group({
            name: [
                this.stock.name,
                [
                    Validators.required,
                ]
            ],
            code: [
                this.stock.id,
                [
                    Validators.required,
                ]
            ],
            price: [
                this.stock.price,
                [
                    Validators.required,
                ]
            ],
            categories: this.fb.array(
                this.buildCategories()
            ),
            desc: [
                this.stock.desc,
                [
                    Validators.required,
                ]
            ]
        })
    }

    buildCategories(): Array<FormControl> {
        let formArray = [];
        this.categories.forEach((categorie) => {
            formArray.push(
                new FormControl(this.stock.categories.indexOf(categorie) != -1)
            )
        })
        return formArray;
    }

    cancel() {
        this.router.navigateByUrl('/stock')
    }
    save() {
        this.router.navigateByUrl('/stock')
    }
}
