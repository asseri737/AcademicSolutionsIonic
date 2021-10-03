import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/compat/auth-guard';

const redirectUnauthorizedToLogin = () =>
  redirectUnauthorizedTo(['/']);
// Automatically log in users
const redirectLoggedInToChat = () => redirectLoggedInTo(['/prefer']);

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    ...canActivate(redirectLoggedInToChat),
  },

  {
    path: 'prefer',
    ...canActivate(redirectUnauthorizedToLogin),
    loadChildren: () => import('./pages/prefer/prefer.module').then( m => m.PreferPageModule)
  },
  {
    path: 'chat',
    ...canActivate(redirectUnauthorizedToLogin),
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'bot',
    loadChildren: () => import('./pages/bot/bot.module').then( m => m.BotPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
