import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { GamersComponent } from './gamers/gamers.component';
import { GamerDetailComponent } from './gamer-detail/gamer-detail.component';
import { NewGamerComponent } from './new-gamer/new-gamer.component';
import { EditGamerComponent } from './edit-gamer/edit-gamer.component';

const routes: Routes = [
  {
    path: '',
    children: [],
    component: WelcomeComponent
  },
  {
    path: 'about',
    children: [],
    component: AboutComponent
  },
  {
    path: 'gamers',
    children: [],
    component: GamersComponent
  },
  {
    path: 'gamers/:id',
    children: [],
    component: GamerDetailComponent
  },
  {
    path: 'admin',
    children: [],
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
