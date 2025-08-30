import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {
  value = signal(0);
increament(){

  this.value.update(v => v + 1);
}

decreament(){
if (this.value()>0) {
  this.value.update(v => v - 1);
} else {
  this.value.set(0);
}
}

reset(){
  this.value.set(0);
}
}
