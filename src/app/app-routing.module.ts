import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentSeasonComponent } from './navigation/fir-nav-bar/current-season.component';
import { GamesComponent } from './navigation/fir-nav-bar/games-component';
import { HomeLayoutComponent } from './navigation/fir-nav-bar/home-layout.component';
import { ViewAllShowsComponent } from './navigation/fir-nav-bar/view-all-shows.component';
import { FirNavBarComponent } from './navigation/fir-nav-bar/fir-nav-bar.component';


const routes: Routes =
  [ {path : '', component:HomeLayoutComponent},
    {path: 'shows', component: ViewAllShowsComponent},
    {path: 'simuldubs', component: CurrentSeasonComponent},
    {path: 'games', component: GamesComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
