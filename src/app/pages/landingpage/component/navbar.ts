import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface NavItem {
  id: number;
  label: string;
  href: string;
  isRoute?: boolean;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
   imports: [CommonModule], // 👈 add this
  template: `
    <header class="header">
      <div class="navbar-area" style="background-color: rgba(243, 250, 250, 0.8)">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-14">
              <nav class="navbar navbar-expand-lg">
                <!-- Brand -->
                <a class="navbar-brand" routerLink="/">
                  <img src="assets/images/logo/logo.svg" alt="Logo" />
                </a>

                <!-- Toggler -->
                <button
                  class="navbar-toggler"
                  type="button"
                  (click)="toggleMenu()"
                  aria-label="Toggle navigation"
                >
                  <span class="toggler-icon"></span>
                  <span class="toggler-icon"></span>
                  <span class="toggler-icon"></span>
                </button>

                <!-- Nav Items -->
                <div
                  class="collapse navbar-collapse sub-menu-bar"
                  [class.show]="isMenuOpen"
                  id="navbarSupportedContent"
                >
                  <div class="ms-auto">
                    <ul id="nav" class="navbar-nav ms-auto">
                      <li
                       *ngFor="let item of navItems"
                        class="nav-item"
                        [class.active-nav]="selectedId === item.id"
                      >
                        <button
                          class="page-scroll"
                          [class.active]="selectedId === item.id"
                          (click)="handleNavClick(item)"
                          [ngStyle]="
                            selectedId === item.id
                              ? {
                                  borderRadius: '5px',
                                  color: '#392303ff',
                                  backgroundColor: '#dceaa6ff'
                                }
                              : {
                                
                              }
                          "
                        >
                          {{ item.label }}
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>

                <!-- Header Button -->
                <div class="header-btn">
                  <a href="#0" class="main-btn btn-hover">Download</a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [``]
})
export class NavbarComponent {
  isMenuOpen = false;
  selectedId = 1;

  navItems: NavItem[] = [
    { id: 1, label: 'Home', href: '#home' },
    { id: 2, label: 'About', href: '#about' },
    { id: 3, label: 'Features', href: '#features' },
    { id: 4, label: 'CTA', href: '#cta' },
    { id: 5, label: 'Todo', href: '/todo', isRoute: true }
  ];

  constructor(private router: Router) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(id: string) {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  handleNavClick(item: NavItem) {
    this.selectedId = item.id;
    this.isMenuOpen = false;

    if (item.isRoute) {
      this.scrollToTop();
      this.router.navigate([item.href]);
    } else {
      if (this.router.url !== '/') {
        this.router.navigate(['/']).then(() => {
          setTimeout(() => this.scrollToSection(item.href), 100);
        });
      } else {
        this.scrollToSection(item.href);
      }
    }
  }
}
