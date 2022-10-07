import { Component, Input, OnInit } from '@angular/core';
// import { constructor } from 'jasmine';
import { slideshow_images } from './slideshow-images';
import { Slideshow_images_model } from './slideshow-images.model';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
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
let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.childNodes[0])
        next = next.nextElementSibling
    }
})
