import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bot',
  templateUrl: './bot.page.html',
  styleUrls: ['./bot.page.scss'],
})
export class BotPage implements OnInit {

  constructor(    private router: Router    ) { }

  ngOnInit() {
  }
toPrefer(){
  this.router.navigateByUrl('/prefer');
}
}
