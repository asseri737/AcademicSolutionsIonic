/* eslint-disable prefer-const */

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentialForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private chatService: ChatService
  ) {

  }

  ngOnInit() {
    this.credentialForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }



  async signIn() {

    const loading = await this.loadingController.create();
    await loading.present();
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    let b = (<HTMLInputElement>document.getElementById('eemail')).value;

    this.chatService
      .signIn(this.credentialForm.value)
      .then(
        (res) => {
          loading.dismiss();
          if(b[0]==='m'){
          this.router.navigateByUrl('/chats', { replaceUrl: true });}
          else{
            this.router.navigateByUrl('/prefer', { replaceUrl: true });
            console.log(b);
          }
        },
        async (err) => {
          loading.dismiss();
          const alert = await this.alertController.create({
            header: ':(',
            message: err.message,
            buttons: ['OK'],
          });

          await alert.present();
        }
      );
  }

  // Easy access for form fields
  get email() {
    return this.credentialForm.get('email');
  }

  get password() {
    return this.credentialForm.get('password');
  }
}
