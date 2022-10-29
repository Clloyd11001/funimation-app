import { Component, Input, OnInit } from '@angular/core';

import { slideshow_images } from './slideshow-images';
import { Slideshow_images_model } from './slideshow-images.model';
import { SlideshowService } from './slideshow.service';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  
  reel: Slideshow_images_model[] = []
  
  constructor(private slideshowService: SlideshowService) {
    
  }

  ngOnInit(): void {
    this.slideshowService.getSlides().subscribe((data: Slideshow_images_model[]) => {
      console.log("Fetching slides");
      console.log(data);
      for(var slide of data){
        console.log(slide);
        this.reel.push(slide);
      }
    });
  }

}

