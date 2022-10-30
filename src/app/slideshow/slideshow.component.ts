import { Component, Input, OnInit } from '@angular/core';

import { slideshow_images } from './slideshow-images';
import { Slideshow_images_model } from './slideshow-images.model';
//import { Slideshow } from './slideshow.model';
import { SlideshowService } from './slideshow.service';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  //myInfo: Slideshow | undefined;
  reel: Slideshow_images_model[] = []
  
  constructor(private slideshowService: SlideshowService) {
    
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

 
}

