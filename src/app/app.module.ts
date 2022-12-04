import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirNavBarComponent } from './navigation/fir-nav-bar/fir-nav-bar.component';
import { AlarmComponent } from './alarm/alarm.component';
import { BodyComponent } from './body/body.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { HomeLayoutComponent } from './navigation/fir-nav-bar/home-layout.component';
import { CurrentSeasonComponent } from './navigation/fir-nav-bar/current-season.component';
import { ViewAllShowsComponent } from './navigation/fir-nav-bar/view-all-shows.component';
import { GamesComponent } from './navigation/fir-nav-bar/games-component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './navigation/fir-nav-bar/user-info.component';
import { AddSlideshowComponent } from './add-slideshow/add-slideshow.component';
import { FormsModule } from '@angular/forms';
import { FirebaseApp } from 'firebase/app';
import {AngularFireModule} from '@angular/fire/compat'
import {AngularFirestoreModule} from '@angular/fire/compat/firestore'
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    FirNavBarComponent,
    AlarmComponent,
    BodyComponent,
    SlideshowComponent,
    HomeLayoutComponent,
    CurrentSeasonComponent,
    ViewAllShowsComponent,
    GamesComponent,
    UserInfoComponent,
    AddSlideshowComponent,
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
