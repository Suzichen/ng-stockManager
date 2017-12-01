import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable()
export class SocketService {

    private ws:WebSocket;

    constructor() { }

    createWebSockeetServer(url: string) {
        // 连接WebSocket服务器
        this.ws = new WebSocket(url);
        // 返回并监听可观测对象
        return new Observable(
            observer => {
                this.ws.onmessage = event => observer.next(event.data); // 正常消息
                this.ws.onerror = event => observer.error(event);   // 错误消息
                this.ws.onclose = event => observer.complete(); // 关闭连接
            }
        )
    }

}
