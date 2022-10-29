import { Component } from '@angular/core';
import { slideshow_images } from 'src/app/slideshow/slideshow-images';
import { Slideshow_images_model } from 'src/app/slideshow/slideshow-images.model';
import { FirNavBarComponent } from './fir-nav-bar.component';

@Component({
  selector: 'fm-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent {
  title = 'funimation-app';
  reel: Slideshow_images_model[] = []
  constructor(){
   /*  for(var x of slideshow_images){
      console.log(x)
      this.reel.push(x)
    } */
  }
}
