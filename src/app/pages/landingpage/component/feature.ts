import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-feature-section',
  standalone: true,
  imports: [NgFor],
  template: `
    <section id="features" class="feature-section">
      <div class="container">
        <div class="row align-items-center">
          
          <!-- Left Section -->
          <div class="col-lg-5 col-md-10">
            <div class="section-title mb-60">
              <h2 class="mb-20">Modern design with Essential Features</h2>
              <p style="color: #6c757d">
                Lorem ipsum dolor amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod te invidunt, Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>

          <!-- Right Section with features -->
          <div class="col-lg-7">
            <div class="row">
              <div 
                class="col-lg-6 col-md-6" 
                *ngFor="let feature of features"
              >
                <div class="single-feature">
                  <!-- Icon + Title -->
                  <div class="d-flex justify-content-center align-items-center gap-4 me-4">
                    <div class="feature-icon">
                      <i [class]="feature.icon"></i>
                    </div>
                    <h4 
                      class="mb-0 d-flex align-items-center" 
                      style="color: #144e01ff"
                    >
                      {{ feature.title }}
                    </h4>
                  </div>
                  <!-- Description -->
                  <div class="feature-content">
                    <p>{{ feature.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `,
  styles: [``]
})
export class FeatureSectionComponent {
  features: Feature[] = [
    {
      id: 1,
      icon: 'lni lni-display',
      title: 'SaaS Focused',
      description:
        'Lorem ipsum dolor amet, consetetur sadipscing elitr, diam nonu eirmod tem invidunt.',
    },
    {
      id: 2,
      icon: 'lni lni-compass',
      title: 'Awesome Design',
      description:
        'Lorem ipsum dolor amet, consetetur sadipscing elitr, diam nonu eirmod tem invidunt.',
    },
    {
      id: 3,
      icon: 'lni lni-grid-alt',
      title: 'Ready to Use',
      description:
        'Lorem ipsum dolor amet, consetetur sadipscing elitr, diam nonu eirmod tem invidunt.',
    },
    {
      id: 4,
      icon: 'lni lni-layers',
      title: 'Essential Sections',
      description:
        'Lorem ipsum dolor amet, consetetur sadipscing elitr, diam nonu eirmod tem invidunt.',
    },
  ];
}
