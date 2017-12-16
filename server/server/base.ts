export class Stock {
    constructor(
        public price:number,
        public name:string,
        public id:number,
        public rating:number,
        public desc:string,
        public categories:Array<string>
    ) {}
}
export class Messages {
    constructor(
        public contact: string,
        public msg: string
    ) {}
}