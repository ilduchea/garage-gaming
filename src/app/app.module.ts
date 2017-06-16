import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { masterFirebaseConfig } from './api-keys';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { GamersComponent } from './gamers/gamers.component';
import { GamerDetailComponent } from './gamer-detail/gamer-detail.component';
import { NewGamerComponent } from './new-gamer/new-gamer.component';
import { EditGamerComponent } from './edit-gamer/edit-gamer.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    AdminComponent,
    GamersComponent,
    GamerDetailComponent,
    NewGamerComponent,
    EditGamerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
