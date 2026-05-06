import { Component } from '@angular/core';

import { HeaderComponent } from '../../layout/header/header.component';
import { FooterComponent } from '../../layout/footer/footer.component';

import { HeroSectionComponent } from '../../sections/hero-section/hero-section.component';
import { PainSectionComponent } from '../../sections/pain-section/pain-section.component';
import { SolutionSectionComponent } from '../../sections/solution-section/solution-section.component';
import { ServicesSectionComponent } from '../../sections/services-section/services-section.component';
import { NichesSectionComponent } from '../../sections/niches-section/niches-section.component';
import { BenefitsSectionComponent } from '../../sections/benefits-section/benefits-section.component';
import { ProcessSectionComponent } from '../../sections/process-section/process-section.component';
import { TestimonialsSectionComponent } from '../../sections/testimonials-section/testimonials-section.component';
import { PricingSectionComponent } from '../../sections/pricing-section/pricing-section.component';
import { CtaSectionComponent } from '../../sections/cta-section/cta-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroSectionComponent,
    PainSectionComponent,
    SolutionSectionComponent,
    ServicesSectionComponent,
    NichesSectionComponent,
    BenefitsSectionComponent,
    ProcessSectionComponent,
    TestimonialsSectionComponent,
    PricingSectionComponent,
    CtaSectionComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}