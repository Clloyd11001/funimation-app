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
    GamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
