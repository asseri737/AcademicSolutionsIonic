/*import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  socket: SocketIOClient.Socket;
  constructor() {
  }

  initialize(){
    this.socket = io('https://mazchat.herokuapp.com/');
  }
  online(username){
    this.socket.emit('online', username);
  }
}
*/
