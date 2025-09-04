import { Component } from '@angular/core';
import { HeroSectionComponent } from './component/hero';
import { AboutSectionComponent } from './component/aboutsection';
import { CtaSectionComponent } from './component/ctasection';
import { FeatureSectionComponent } from './component/feature';


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
