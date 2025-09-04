import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './pages/landingpage/component/navbar';
import { FooterComponent } from './pages/landingpage/component/footer';
import { PreloaderComponent } from './pages/landingpage/component/preloader';
import { ScrollTopComponent } from './pages/landingpage/component/scrolltop';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    PreloaderComponent,
    ScrollTopComponent
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
