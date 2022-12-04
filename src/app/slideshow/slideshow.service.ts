import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Slideshow_images_model } from './slideshow-images.model';
import { HttpClientModule } from '@angular/common/http';
import {AngularFireDatabase} from '@angular/fire/compat/database'


@Injectable({
  providedIn:'root'  
})

export class SlideshowService{
    private baseUrl:string = "https://funimation-app-default-rtdb.firebaseio.com/";
    private slideshowEndPoint:string = "Slideshow";

    constructor(private db:AngularFireDatabase){

    }

    getSlides(){
        return this.db.list<Slideshow_images_model>("Slideshow").valueChanges();
    
    }

    addSlideShow(slide: Slideshow_images_model){
        this.db.list<Slideshow_images_model>("Slideshow").push(slide);
    }
}