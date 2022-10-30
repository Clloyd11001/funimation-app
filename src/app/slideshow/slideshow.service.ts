import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Slideshow_images_model } from './slideshow-images.model';

@Injectable({
  providedIn:'root'  
})

export class SlideshowService{
    private baseUrl:string = "https://funimation-app-default-rtdb.firebaseio.com/";
    private slideshowEndPoint:string = "Slideshow.json";

    constructor(private http:HttpClient){

    }

    getSlides(){
        return this.http.get<Slideshow_images_model []>(this.baseUrl + this.slideshowEndPoint);
    
    }

    getSlide(index:number){
        return this.http.get<Slideshow_images_model[]>(this.baseUrl + 'Slideshow' + '/' + index + '.json');
    }
}