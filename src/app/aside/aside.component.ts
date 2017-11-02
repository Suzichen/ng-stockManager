import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'admin-aside',
    templateUrl: './aside.component.html',
    styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

    constructor(
        public router:Router
    ) { }

    ngOnInit() {
    }

    nav(url:string) {
        this.router.navigateByUrl(url);
    }
}
