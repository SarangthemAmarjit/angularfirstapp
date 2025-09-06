import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule } from "ngx-acuw";

@Component({
  selector: 'app-carouselcomponent',
  imports: [CarouselModule,CommonModule],
  templateUrl: './carouselcomponent.html',
  styleUrl: './carouselcomponent.css'
})
export class Carouselpage {
  carouselItems = [
    'https://source.unsplash.com/7BLRSG-AkJs',
    'https://source.unsplash.com/rcJbbK5_iIA',
    'https://source.unsplash.com/yQUwIlUeU4o',
    'https://source.unsplash.com/MlaQmWvzRTw',
    'https://source.unsplash.com/6dTpYUcr1yg',
  ];
}







