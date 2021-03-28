import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  Slides:any;
  toggle:any;

  constructor(private Data:DataService) {
    this.Slides = Data.getSlides();
    this.changeSlides(0);
  }

  changeSlides(index:number){
    if(index < 0)
      index = this.Slides.length - 1;
    if(index > this.Slides.length - 1)
      index = 0;

    this.toggle = Array();
    for (let i = 0; i < this.Slides.length; i++)
      this.toggle.push(false);

    this.toggle[index] = true;
  }

  ngOnInit(): void {
  }

}
