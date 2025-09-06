import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule } from "ngx-acuw";

@Component({
  selector: 'app-carouselcomponent',
  standalone: true, // <-- MISSING in your code
  imports: [CarouselModule, CommonModule],
  templateUrl: './carouselcomponent.html',
  styleUrls: ['./carouselcomponent.css'] // <-- should be styleUrls (plural)
})
export class Carouselpage {
  carouselItems = [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
    'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
  ];
}
