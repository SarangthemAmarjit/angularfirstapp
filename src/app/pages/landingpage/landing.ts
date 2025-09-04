import { Component } from '@angular/core';
import { AboutSectionComponent } from './component/aboutsection/aboutsection';
import { CtaSectionComponent } from './component/ctasection';
import { FeatureSectionComponent } from './component/feature';
import { HeroSectionComponent } from './component/hero';


@Component({
  selector: 'app-landing',
  standalone: true,
  imports:  [
    HeroSectionComponent,
    AboutSectionComponent,
    FeatureSectionComponent,
    CtaSectionComponent
  ],
  template: `
    <div class="landing">
      <app-hero-section />
      <app-about-section />
      <app-feature-section />
      <app-cta-section />
    </div>
  `,
  styles: [`
    .landing {
      display: block;
    }
  `]
})
export class LandingComponent {}
