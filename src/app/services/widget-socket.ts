import {Injectable} from 'angular2/core';
import * as io from 'socket.io-client';

@Injectable()
export class WidgetSocket {
  private socket: SocketIOClient.Socket;

  connect() {
    this.socket = io.connect('localhost:3001')
  }
  
  disconnect() {
    this.socket.close();
  }
  
  addWidget(widget) {
    
  }
}
