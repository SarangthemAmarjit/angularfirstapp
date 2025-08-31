import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]'
})
export class HighlightCompletedTodo {
  iscompleted = input(false);
  el = inject(ElementRef);
  styleeffect = effect(() => {

    if (this.iscompleted()) {
      this.el.nativeElement.style.textDecoration = 'line-through';
      this.el.nativeElement.style.color = '#e0b126ff';
      this.el.nativeElement.style.backgroundColor = '#b3f4b8ff';

    } else {
      this.el.nativeElement.style.textDecoration = 'none';
      this.el.nativeElement.style.color = 'black';
      this.el.nativeElement.style.backgroundColor = 'transparent';
    }

  });

  constructor() { }

}
