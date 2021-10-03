import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreferPage } from './prefer.page';

const routes: Routes = [
  {
    path: '',
    component: PreferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreferPageRoutingModule {}
