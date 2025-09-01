import { Component, signal } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,                  // 👈 required for standalone
  imports: [RouterModule,RouterLink],           // 👈 RouterModule includes RouterLink + RouterLinkActive
  templateUrl: './header.html',
  styleUrls: ['./header.css']        // 👈 must be plural
})
export class Header {
  title = signal('MY FIRST ANGULAR APP');
}
