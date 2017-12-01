import { Component, OnInit } from '@angular/core';
import { SocketService } from './socket.service';

@Component({
  selector: 'admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    private messages:Messages = new Messages('','');
    private msgCount:number = 0;

    constructor(
        private socketService: SocketService
    ) { }

    ngOnInit() {
        this.socketService
            .createWebSockeetServer('ws://localhost:8001')
            .map((data:string) => JSON.parse(data))
            // 每收到一条消息，就刷新消息列表
            .subscribe(data => this.resetMessages(data))
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