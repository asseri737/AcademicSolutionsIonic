import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreferPageRoutingModule } from './prefer-routing.module';

import { PreferPage } from './prefer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreferPageRoutingModule
  ],
  declarations: [PreferPage]
})
export class PreferPageModule {}
