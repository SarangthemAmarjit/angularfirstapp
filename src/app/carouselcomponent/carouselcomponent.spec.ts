import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carouselpage } from './carouselcomponent';

describe('Carouselcomponent', () => {
  let component: Carouselpage;
  let fixture: ComponentFixture<Carouselpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carouselpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Carouselpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
