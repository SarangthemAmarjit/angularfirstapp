import { Component, signal } from '@angular/core';
import { Greeting } from '../components/greeting/greeting';
import { count } from 'rxjs';
import { Counter } from '../components/counter/counter';

@Component({
  selector: 'app-home',
  imports: [Greeting,Counter],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
homemessage = signal('Welcome to the home page');


keyhandler(){
  console.log('user typed something');
}


}
