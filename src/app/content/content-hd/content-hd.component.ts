import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import "rxjs/add/operator/filter"

@Component({
    selector: 'admin-content-hd',
    templateUrl: './content-hd.component.html',
    styleUrls: ['./content-hd.component.css']
})
export class ContentHdComponent implements OnInit {

    public pageTitle:string = '首页';
    public pageDes:string = '首页信息';

    constructor(
        router: Router
    ) { 
        // 路由事件
        router.events
        // 过滤出导航结束事件
            .filter(event => event instanceof NavigationEnd)
            // 订阅所有此类事件
            .subscribe((event:NavigationEnd) => {
                // 执行回调
                if (event.url === '/home') {
                    this.pageTitle = '首页';
                    this.pageDes = '首页信息';
                } else if (event.url.startsWith('/stock')) {
                    this.pageTitle = '股票管理';
                    this.pageDes = '股票的增删改查';
                }
            })
     }

    ngOnInit() {
    }

}
