import { Component, OnInit, OnChanges } from '@angular/core';
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
    public categories: Array<string> = ['IT','互联网','金融','医疗','教育'];

    // 错误信息列表缓存
    public formErrorsList = {
        name: '',
        code: '',
        price: '',
        categories: ''
    };

    // 错误信息
    private formErrorsMsg = {
        name: {
            required: '请输入股票名。',
            minlength: '股票名必须大于3个字符。'
        },
        code: {
            required: '请输入股票代码。'
        },
        price: {
            required: '请输入价格。'
        },
        categories: {
            checkboxValidator: '请至少选择一个种类。'
        }
    };

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
        this.form.valueChanges
            .subscribe(value => this.onValueChange(value));
    }

    // 构建表单
    private buildForm() {
        this.form = this.fb.group({
            name: [
                this.stock.name,
                [
                    Validators.required,
                    Validators.minLength(3)
                ]
            ],
            code: [
                this.stock.id,
                [
                    Validators.required
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
                this.stock.desc
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

    private onValueChange(value) {
        if(!this.form) return;
        // 取到总表单
        const form = this.form;
        // 循环错误信息的列表
        for (const formItem in this.formErrorsList) {
            // 清除缓存
            this.formErrorsList[formItem] = '';
            // 取到当前的FormControl
            const control = form.get(formItem);
            // 如果此FormControl存在 且 没有校验成功 且 被修改过
            if (control && control.invalid && control.dirty) {
                // 取到此FormControl的错误信息库存
                const msgs = this.formErrorsMsg[formItem];
                // 循环此FormControl的实际错误信息列表
                for (const msg in control.errors) {
                    // 往缓存中添加错误信息
                    this.formErrorsList[formItem] += msgs[msg] + '';
                }
            }
        }
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
