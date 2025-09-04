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
styleUrl: './header.css',
  
   imports: [CommonModule], // 👈 add this
  templateUrl: './header.html',
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
