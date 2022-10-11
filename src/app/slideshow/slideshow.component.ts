import { Component, Input, OnInit } from '@angular/core';
// import { constructor } from 'jasmine';
import { slideshow_images } from './slideshow-images';
import { Slideshow_images_model } from './slideshow-images.model';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent  {
@Input() picture: string;
/* @Input() img: string;
@Input() img: string;
@Input() img: string;
 */
reel: Slideshow_images_model[] = []
constructor(){
  this.picture = "";
  for(var x of slideshow_images){
    console.log(x)
    this.reel.push(x)
  }
}

  ngOnInit(): void {
  }

}

