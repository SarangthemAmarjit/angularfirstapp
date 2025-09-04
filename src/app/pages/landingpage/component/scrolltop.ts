import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  standalone: true,
  template: `
    <a
      href="#"
      class="scroll-top btn-hover"
      [class.show]="isVisible"
      (click)="scrollToTop($event)"
    >
      <i class="lni lni-chevron-up"></i>
    </a>
  `,
  styles: [``]
})
export class ScrollTopComponent {
  isVisible = false;

  // 👇 Handle window scroll
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isVisible = window.pageYOffset > 300;
  }

  scrollToTop(event: Event) {
    event.preventDefault(); // prevent anchor default jump
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
