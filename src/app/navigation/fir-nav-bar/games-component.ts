
import { Component, Input, OnInit } from '@angular/core';
import { games_images } from './games-images';
import { games_images_model } from './games-images-models';


@Component({
  selector: 'app-slideshow',
  templateUrl: './games-component.html',
  styleUrls: ['./games-component.css']
})
export class GamesComponent {
@Input() picture: string;
@Input() description: string;
@Input() title: string;


reel: games_images_model[] = []
constructor(){
  this.picture = "";
  this.description = "";
  this.title = "";
  for(var x of games_images){
    console.log(x)
    this.reel.push(x)
  }
}

  ngOnInit(): void {
  }

}
 