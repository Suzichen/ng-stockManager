import { Component, OnInit, OnChanges } from '@angular/core';
import { StockService, Stock } from '../stock.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs";
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
    selector: 'admin-stock-form',
    templateUrl: './stock-form.component.html',
    styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

    public stock: Stock = new Stock(null, '', null, null, '', [ ]);
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
        // 初始化表单
        this.buildForm();
        // 获取后台数据，更新表单
        if (stockId != 0) {
            this.stockService.getStock(stockId)
                .subscribe(
                    data => this.resetForm(data)
                );
        };
        // 内容变化时，处理表单验证
        this.form.valueChanges
            .subscribe(value => this.onValueChange(value));
    }

    // 初始化表单
    private buildForm() {
        this.form = this.fb.group({
            name: [
                '',
                [
                    Validators.required,
                    Validators.minLength(3)
                ]
            ],
            code: [
                {
                  value: '',
                  disabled: true
                },
                [
                    Validators.required
                ]
            ],
            price: [
                '',
                [
                    Validators.required,
                ]
            ],
            categories: this.fb.array(
                this.buildCategories(true)
            ),
            desc: [
                ''
            ]
        })
    }

    // 获取到数据后渲染表单
    resetForm(stock:Stock) {
        this.stock = stock;
        this.form.reset({
            name: stock.name,
            code: stock.id,
            price: stock.price,
            categories: this.buildCategories(),
            desc: stock.desc
        });
    }

    // 创建复选框FormControl
    private buildCategories(init?:boolean): Array<FormControl> {
        let formArray = [];
        this.categories.forEach(categorie => {
            // 判断是否需要初始化
            if (!init) {
                formArray.push(
                    this.stock.categories.indexOf(categorie) != -1
                )
            } else {
                formArray.push(
                    new FormControl(false)
                )
            }
        });
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
        this.router.navigateByUrl('/stock')
    }

    save() {
        this.form.value.rating = this.stock.rating;
        this.form.value.categories = this.toStringCategories();
        this.router.navigateByUrl('/stock');
    }
}
