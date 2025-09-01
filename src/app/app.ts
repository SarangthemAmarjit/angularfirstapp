import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, RouterModule  // 👈 make sure RouterModule is imported
  ],
  template: `
   <app-header/>
   <main>
    <router-outlet />
   </main>
  


  
  `,
  styles: [
    'main { padding:16px; display: flex; }'
  ],
})
export class App {
  protected readonly title = signal('first-ng-app');
}
