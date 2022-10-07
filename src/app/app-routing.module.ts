import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './navigation/fir-nav-bar/home-layout.component';
import { viewAllShows } from './navigation/fir-nav-bar/view-all-shows.component';

const routes: Routes =
  [ {path : '', component:HomeLayoutComponent},
    {path: 'View-All-Shows', component: viewAllShows },
    {path: 'home', component: HomeLayoutComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
