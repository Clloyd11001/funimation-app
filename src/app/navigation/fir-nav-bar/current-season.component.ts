
import { Component, Input, OnInit } from '@angular/core';
import { current_season_images } from './current-season-images';
import { current_season_images_model } from "./current_season_images_model";
@Component({
  selector: 'app-slideshow',
  templateUrl: './current-season.component.html',
  styleUrls: ['./current-season.component.css']
})
export class CurrentSeasonComponent {
@Input() picture: string;
/* @Input() img: string;
@Input() img: string;
@Input() img: string;
 */
reel: current_season_images_model[] = []
constructor(){
  this.picture = "";
  for(var x of current_season_images){
    console.log(x)
    this.reel.push(x)
  }
}

  ngOnInit(): void {
  }

}