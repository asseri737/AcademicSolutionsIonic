
import { Component, NgZone } from '@angular/core';

import { Platform } from '@ionic/angular';

declare let apiAIPromises: any;

@Component({
  selector: 'app-bot',
  templateUrl: './bot.page.html',
  styleUrls: ['./bot.page.scss'],
})
export class BotPage {
  answer;

  constructor(public platform: Platform, public ngZone: NgZone) {
    platform.ready().then(() => {
      apiAIPromises.init({
        clientAccessToken: '26950d7a838f45e0b584e39ef33c7c47'
      }).then(result => console.log(result));
    });
  }

  ask(question) {
    apiAIPromises.requestText({
      query: question
    })
    .then(({result: {fulfillment: {speech}}}) => {
       this.ngZone.run(()=> {
         this.answer = speech;
       });
    });
  }
}


