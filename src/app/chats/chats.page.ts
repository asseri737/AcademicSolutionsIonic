/* eslint-disable @typescript-eslint/ban-types */
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-chats',
  templateUrl: 'chats.page.html',
  styleUrls: ['chats.page.scss'],
})
export class ChatsPage {
  username: String;
  hideInput: boolean;

  contacts = [
    {
      name: 'Abdullah',
      imgUri: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Basil',
      imgUri: 'https://randomuser.me/api/portraits/men/15.jpg'
    },
  ];
  constructor( private router: Router,public afA: AngularFireAuth    ) {}


  signOut() {
    this.afA.signOut().then(() => {
      this.router.navigate(['']);
   });
  }
}
