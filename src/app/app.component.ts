import { Component } from '@angular/core';
import { slideshow_images } from './slideshow/slideshow-images';
import { Slideshow_images_model } from './slideshow/slideshow-images.model';
import { HomeLayoutComponent } from './navigation/fir-nav-bar/home-layout.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'funimation-app';

}
