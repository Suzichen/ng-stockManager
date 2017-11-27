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
        this.buildForm();
    }

    // 构建表单
    private buildForm() {
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

    // 创建复选框FormControl
    private buildCategories(): Array<FormControl> {
        let formArray = [];
        this.categories.forEach(categorie => {
            formArray.push(
                new FormControl(this.stock.categories.indexOf(categorie) != -1)
            )
        })
        return formArray;
    }

    // 将布尔值数组转换为字符串数组
    private toStringCategories(): Array<string> {
        let stringCategories = [];
        let index = 0;
        this.form.value.categories.forEach((categorie, i) => {
            if(categorie === true) {
                stringCategories[index] = this.categories[i];
                index++;
            }
        });
        return stringCategories;
    }

    cancel() {
        // this.router.navigateByUrl('/stock')
    }
    
    save() {
        this.form.value.rating = this.stock.rating;
        this.form.value.categories = this.toStringCategories();
        console.log(this.form.value)
        // this.router.navigateByUrl('/stock')
    }
}
