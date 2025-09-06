import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from './pages/landingpage/component/footer';
import { NavbarComponent } from './pages/landingpage/component/header/header';
import { PreloaderComponent } from './pages/landingpage/component/preloader';
import { ScrollTopComponent } from './pages/landingpage/component/scrolltop';
import {CarouselModule } from "ngx-acuw";




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    PreloaderComponent,
    ScrollTopComponent,
    CarouselModule,
   
  ],

  template: `
    <app-preloader />
    <app-navbar />
    <router-outlet />
    <app-footer />
    <app-scroll-top />
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class App {}
