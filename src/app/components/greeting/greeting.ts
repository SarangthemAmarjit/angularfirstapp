import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-greeting',
  imports: [],
  templateUrl: './greeting.html',
  styleUrl: './greeting.css'
})
export class Greeting {
  message = input('Hello Hello')
}
