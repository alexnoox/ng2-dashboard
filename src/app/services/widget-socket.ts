import {Injectable} from 'angular2/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable()
export class WidgetSocket {
    public widgetsObservable;

    private socket: SocketIOClient.Socket;

    connect() {
        this.socket = io.connect('localhost:3001')
        this.socket.on('connect', () => {
            console.log('WidgetSocket: Opened a new socket connection', this.socket.id);
        })
    }

    disconnect() {
        console.log('WidgetSocket: Closing socket connection', this.socket.id);
        this.socket.close();
    }

    addWidget(widget) {
        this.socket.emit('add widget', widget);
        console.log('WidgetSocket: Adding a widget', widget);
    }

    registerAddWidget() {
        console.log('WidgetSocket: Registering add widget event');

        this.widgetsObservable = Observable.fromEvent(this.socket, 'broadcast widget')
        this.widgetsObservable.subscribe(widget => {
            console.log('WidgetSocket: Received a new widget', widget);
        });
        return this.widgetsObservable;
    }
}
