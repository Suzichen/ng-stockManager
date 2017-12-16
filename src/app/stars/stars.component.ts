import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
    selector: 'admin-stars',
    templateUrl: './stars.component.html',
    styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {

    @Input()
    private rating:number;

    @Input()
    private readOnly:boolean = true;

    @Output()
    private ratingChange:EventEmitter<number> = new EventEmitter();


    public stars:Array<boolean> = [];

    constructor() { }

    ngOnInit() {

    }

    ngOnChanges() {
        this.stars = [];
        for(let i = 1; i <= 5; i++) {
            this.stars.push( i > this.rating )
        }
    }

    changeStar(index:number) {
        if (this.readOnly === true) {
            return;
        }
        this.rating = index + 1;
        this.ratingChange.emit(this.rating);
    }

}
