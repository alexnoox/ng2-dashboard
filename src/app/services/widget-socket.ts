import {Injectable} from 'angular2/core';
import * as io from 'socket.io-client';

@Injectable()
export class WidgetSocket {
    private socket: SocketIOClient.Socket;

    connect() {
        this.socket = io.connect('localhost:3001')
        this.socket.on('connect', () => {
            console.log('Opened a new socket connection', this.socket.id);
        })
    }

    disconnect() {
        console.log('Closing socket connection', this.socket.id);
        this.socket.close();
    }

    addWidget(widget) {
        this.socket.emit('add widget', widget);
    }

    registerAddWidget() {

    }
}
