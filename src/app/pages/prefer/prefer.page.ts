import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prefer',
  templateUrl: './prefer.page.html',
  styleUrls: ['./prefer.page.scss'],
})
export class PreferPage implements OnInit {

  constructor(    private router: Router,public afA: AngularFireAuth    ) { }

  ngOnInit() {
  }



  toChat(){
    this.router.navigateByUrl('/chat/mohsin');
  }
  toBot(){
    this.router.navigateByUrl('/bot');
  }
  signOut() {
    this.afA.signOut().then(() => {
      this.router.navigate(['']);
   });
  }
}

