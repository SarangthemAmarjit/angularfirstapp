import { Component } from '@angular/core';
import { Carouselpage } from "../../../carouselcomponent/carouselcomponent";

@Component({
  selector: 'app-hero-section',
  standalone: true,
  template: `
    <section id="home" class="hero-section">
      <div class="container">
        <div class="row align-items-center">

          <!-- Hero Content -->
          <div class="col-xl-6 col-lg-6 col-md-10">
            <div class="hero-content">
              <h1 style="color: #186411ff; font-family: -moz-initial;">
                You are using free lite version of SaaSIntro
              </h1>
              <p>
                Please, purchase full version of the template to get all
                sections, elements and permission to remove footer credits.
              </p>
              <a href="#0" class="main-btn btn-hover">Buy Now</a>
            </div>
          </div>

          <!-- Hero Image -->
          <div class="col-xxl-6 col-xl-6 col-lg-6">
          <app-carouselcomponent/>
          </div>

        </div>
      </div>
    </section>
  `,
  styles: [``],
  imports: [Carouselpage]
})
export class HeroSectionComponent {}
