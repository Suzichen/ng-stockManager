import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    private messages:Messages = new Messages('','');
    public msgCount:number = 0;

    constructor(
        
    ) { }

    ngOnInit() {
        setInterval(() => {
            this.resetMessages(mockData);
        }, 10000);
    }

    resetMessages(data) {
        this.msgCount++;
        this.messages.contact = data.contact;
        this.messages.msg = data.msg;
    }

}

export class Messages {
    constructor(
        public contact: string,
        public msg: string
    ) {}
}

const mockData = {
    contact: "Suzichen",
    msg: "这是自动发送的消息"
}