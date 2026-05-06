import {
  Component,
  OnInit,
  OnDestroy,
  Inject,
  PLATFORM_ID
} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  imports: [],
  templateUrl: './testimonials-section.component.html',
  styleUrl: './testimonials-section.component.scss'
})
export class TestimonialsSectionComponent implements OnInit, OnDestroy {

  testimonials = [
    {
      name: 'Dra. Mariana Silva',
      role: 'Clínica Geral',
      location: 'Lisboa',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      text: 'O meu site finalmente transmite o profissionalismo que eu queria. Comecei a receber contactos mais alinhados com o meu trabalho.'
    },
    {
      name: 'Clínica Vida Plena',
      role: 'Medicina Integrativa',
      location: 'Porto',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      text: 'A forma como organizaram a nossa presença digital fez toda a diferença. Hoje sentimos muito mais clareza na comunicação.'
    },
    {
      name: 'Ana Ribeiro',
      role: 'Nutricionista',
      location: 'Coimbra',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      text: 'Passei de um site que não dizia nada para uma presença que realmente me representa.'
    },
    {
      name: 'Espaço Harmonia',
      role: 'Yoga & Bem-estar',
      location: 'Braga',
      image: 'https://randomuser.me/api/portraits/men/76.jpg',
      text: 'Os pacientes começaram a chegar de forma mais natural. Foi uma mudança muito tranquila e eficaz.'
    }
  ];

  currentIndex = 0;
  isVisible = true;

  private timeoutId: any;
  private isRunning = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    if (this.isRunning) return;

    this.isRunning = true;
    this.startLoop();
  }

  startLoop(): void {
    this.timeoutId = setTimeout(() => {

      this.isVisible = false;

      setTimeout(() => {
        this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
        this.isVisible = true;
        this.startLoop();
      }, 500);

    }, 4000);
  }

  ngOnDestroy(): void {
    this.isRunning = false;
    clearTimeout(this.timeoutId);
  }

}