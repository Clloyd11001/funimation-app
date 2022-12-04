import { Component, OnInit } from '@angular/core';
import { Slideshow_images_model } from '../slideshow/slideshow-images.model';
import { SlideshowService } from '../slideshow/slideshow.service';

@Component({
  selector: 'fm-add-product',
  templateUrl: './add-slideshow.component.html',
  styleUrls: ['./add-slideshow.component.css']
})
export class AddSlideshowComponent implements OnInit {

  constructor(private ss:SlideshowService) { }

  ngOnInit(): void {
  }

  addSlideshow(slide:Slideshow_images_model){
    console.log("You clicked add slide")
    console.log(slide)
    this.ss.addSlideShow(slide);
  }
}
