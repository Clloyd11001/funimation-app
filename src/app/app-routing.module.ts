import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSlideshowComponent } from './add-slideshow/add-slideshow.component';
import { AuthComponent } from './auth/auth.component';
import { CurrentSeasonComponent } from './navigation/fir-nav-bar/current-season.component';
import { GamesComponent } from './navigation/fir-nav-bar/games-component';
import { HomeLayoutComponent } from './navigation/fir-nav-bar/home-layout.component';
import { ViewAllShowsComponent } from './navigation/fir-nav-bar/view-all-shows.component';


const routes: Routes =
  [ {path : '', component:HomeLayoutComponent},
  {path : 'home', component:HomeLayoutComponent},
    {path: 'shows', component: ViewAllShowsComponent},
    {path: 'simuldubs', component: CurrentSeasonComponent},
    {path: 'auth', component: AuthComponent},
    {path: 'games', component: GamesComponent},
    {path: 'admin', component:AddSlideshowComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
