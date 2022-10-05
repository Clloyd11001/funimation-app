import { Component } from '@angular/core';
import { slideshow_images } from './slideshow/slideshow-images';
import { Slideshow_images_model } from './slideshow/slideshow-images.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'funimation-app';
  reel: Slideshow_images_model[] = []
  constructor(){
    for(var x of slideshow_images){
      console.log(x)
      this.reel.push(x)
    }
  }
}
