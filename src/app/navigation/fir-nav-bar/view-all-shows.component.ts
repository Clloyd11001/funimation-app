
import { Component, Input, OnInit } from '@angular/core';
import { view_all_shows_images } from './view-all-shows-images';
import { view_all_shows_images_model } from './view-all-shows-images.model';

@Component({
  selector: 'app-slideshow',
  templateUrl: './view-all-shows.component.html',
  styleUrls: ['./view-all-shows.component.css']
})
export class ViewAllShowsComponent {
@Input() picture: string;
/* @Input() img: string;
@Input() img: string;
@Input() img: string;
 */
reel: view_all_shows_images_model[] = []
constructor(){
  this.picture = "";
  for(var x of view_all_shows_images){
    console.log(x)
    this.reel.push(x)
  }
}

  ngOnInit(): void {
  }

}
 