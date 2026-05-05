import {
  Component,
  OnInit,
  OnDestroy,
  Inject,
  PLATFORM_ID
} from '@angular/core';

import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit, OnDestroy {

  titles: string[] = [
    'Websites elegantes para profissionais da saúde',
    'Presença digital para clínicas e terapeutas',
    'Marketing sofisticado para bem-estar e saúde'
  ];

  currentTitle = this.titles[0];

  private index = 0;
  private timeoutId: any;
  private isRunning = false;

  isVisible = true;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {

    if (!isPlatformBrowser(this.platformId)) return;
    if (this.isRunning) return;

    this.isRunning = true;
    this.startLoop();
  }

  startLoop(): void {

    this.timeoutId = setTimeout(() => {

      // fade out
      this.isVisible = false;

      setTimeout(() => {

        // troca texto
        this.index = (this.index + 1) % this.titles.length;
        this.currentTitle = this.titles[this.index];

        // fade in
        this.isVisible = true;

        // loop
        this.startLoop();

      }, 500);

    }, 3000);
  }

  ngOnDestroy(): void {
    this.isRunning = false;
    clearTimeout(this.timeoutId);
  }
}