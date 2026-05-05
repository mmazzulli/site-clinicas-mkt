import { Component, Inject, PLATFORM_ID, OnInit, OnDestroy } from '@angular/core';
import { isPlatformBrowser, NgFor } from '@angular/common';

@Component({
  selector: 'app-niches-section',
  standalone: true,
  imports: [NgFor], // 👈 AQUI ESTÁ A CORREÇÃO
  templateUrl: './niches-section.component.html',
  styleUrl: './niches-section.component.scss'
})
export class NichesSectionComponent implements OnInit, OnDestroy {

  groups: string[][] = [
    ['Clínicas médicas', 'Clínicas dentárias', 'Fisioterapia'],
    ['Nutricionistas', 'Naturopatas', 'Medicina integrativa'],
    ['Estética', 'Spa', 'Terapias corporais'],
    ['Yoga', 'Bem-estar', 'Espaços holísticos']
  ];

  currentIndex = 0;
  isAltColor = false;

  private timer: any;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.startLoop();
    }
  }

  startLoop() {
    this.timer = setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.groups.length;
      this.isAltColor = !this.isAltColor;
      this.startLoop();
    }, 2500);
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }
}