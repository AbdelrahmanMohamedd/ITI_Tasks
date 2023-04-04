import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent {

  i:number = 0;
  j:number = 0;
  slides:any = false;

  images = ['Mosalah.jfif','CR7.jpg','Messi.jfif','Benzema.jpg','Neymar.jpg'];
  imgSrc = "assets/".concat(this.images[this.i]);
  
  NextImg() {
    if (this.i>3) this.i=4; 
    this.imgSrc="assets/".concat(this.images[this.i++]);
  }
  PrevImg() {
    if (this.i<1) this.i=1;
    this.imgSrc="assets/".concat(this.images[--this.i]);
  }

  SlideShow() {
      if(!this.slides){  
      this.slides = setInterval( ()=>{
        if (this.i>3) this.i=4; 
        this.imgSrc="assets/".concat(this.images[this.i++]);
        if(this.i==5) this.i=0;
      },500); 
    }
  }

  StopSlideShow(){
    clearInterval(this.slides) 
    this.slides = undefined; 
  }
}

