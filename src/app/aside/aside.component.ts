import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'admin-aside',
    templateUrl: './aside.component.html',
    styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

    public menus:Array<Menu>;
    public currentMenuId:number;

    constructor(
        public router:Router
    ) { }

    ngOnInit() {
        this.menus = [
            new Menu(1, '首页', 'home'),
            new Menu(2, '股票管理', 'stock')
        ]
    }

    nav(menu:Menu) {
        this.router.navigateByUrl(menu.link);
        this.currentMenuId = menu.id;
    }
}

export class Menu {
    constructor(
        public id: number,
        public name: string,
        public link: string
    ) {}
}