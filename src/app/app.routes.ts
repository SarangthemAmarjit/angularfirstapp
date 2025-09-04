import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landingpage/landing';
import { TodoPageComponent } from './pages/todo';


export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'todo', component: TodoPageComponent }
];
