import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import * as firebase from 'firebase/app';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface User {
  uid: string;
  email: string;
}

export interface Message {
  id: string;
  from: string;
  msg: string;
  fromName: string;
  myMsg: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  currentUser: User = null;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.afAuth.onAuthStateChanged((user) => {
      this.currentUser = user;
    });
  }

  signIn({ email, password }) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  signOut(): Promise<void> {
    return this.afAuth.signOut();
  }

addChatMessage(msg) {
  return this.afs.collection('messages').add({
    msg,
    from: this.currentUser.uid,
    createdAt:Date.now
  });
}

getChatMessages() {
  let users = [];
  return this.getUsers().pipe(
    switchMap(res => {
      users = res;
      return this.afs.collection('messages', ref => ref.orderBy('createdAt')).valueChanges({ idField: 'id' }) as Observable<Message[]>;
    }),
    map(messages => {
      // Get the real name for each user
      for (const m of messages) {
        m.fromName = this.getUserForMsg(m.from, users);
        m.myMsg = this.currentUser.uid === m.from;
      }
      return messages;
    })
  );
}

private getUsers() {
  return this.afs.collection('users').valueChanges({ idField: 'uid' }) as Observable<User[]>;
}

private getUserForMsg(msgFromId, users: User[]): string {
  for (const usr of users) {
    // eslint-disable-next-line eqeqeq
    if (usr.uid == msgFromId) {
      return usr.email;
    }
  }
  return 'Deleted';
}}
