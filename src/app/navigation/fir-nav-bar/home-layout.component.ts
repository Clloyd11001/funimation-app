import { Component } from '@angular/core';
import { slideshow_images } from 'src/app/slideshow/slideshow-images';
import { Slideshow_images_model } from 'src/app/slideshow/slideshow-images.model';
import { Slideshow } from 'src/app/slideshow/slideshow.model';
import { SlideshowService } from 'src/app/slideshow/slideshow.service';
import { FirNavBarComponent } from './fir-nav-bar.component';
@Component({
  selector: 'fm-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent {
  myInfo: Slideshow | undefined;
  title = 'funimation-app';
  reel: Slideshow_images_model[] = [];
  constructor(private slideshowService:SlideshowService){
   /*  for(var x of slideshow_images){
      console.log(x)
      this.reel.push(x)
    } */
  }
  ngOnInit(): void{
   /*  this.slideshowService.getSlides().subscribe((data: Slideshow_images_model []) => {
      console.log("Fetching slides");
     for(var slide of data){
      console.log(slide);
      this.reel.push(slide);
     }
    })
  } */
}
}
