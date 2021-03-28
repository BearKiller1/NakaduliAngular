import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  slides = [
    {
      id:1,
      img:"https://wallpaper.dog/large/5444717.jpg",
      title:"test slide"
    },
    {
      id:2,
      img:"https://www.kolpaper.com/wp-content/uploads/2020/11/Hong-Kong-4K-Wallpaper.jpg",
      title:"test slide"
    },
    {
      id:3,
      img:"https://wallpaperaccess.com/full/51472.jpg",
      title:"test slide"
    },
    {
      id:4,
      img:"https://hdqwalls.com/wallpapers/hong-kong-beauty.jpg",
      title:"test slide"
    }
  ];
  constructor() { }
  getSlides(){
    return this.slides;
  }
}
