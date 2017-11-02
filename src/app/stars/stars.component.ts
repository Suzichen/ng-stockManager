import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'admin-stars',
    templateUrl: './stars.component.html',
    styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

    @Input()
    private rating:number;

    private stars:Array<boolean> = [];

    constructor() { }

    ngOnInit() {
        for(let i = 0; i<=5; i++) {
            this.stars.push( i > this.rating )
        }
    }

}
