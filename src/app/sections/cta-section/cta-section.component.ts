import { Component } from '@angular/core';

@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [],
  templateUrl: './cta-section.component.html',
  styleUrl: './cta-section.component.scss'
})
export class CtaSectionComponent {

  scrollToPricing() {
    const el = document.getElementById('pricing');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

}