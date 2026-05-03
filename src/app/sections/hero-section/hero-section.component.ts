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

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {

    if (!isPlatformBrowser(this.platformId)) return;

    if (this.isRunning) return; // 🚨 impede duplicação de loop

    this.isRunning = true;

    this.startLoop();
  }

  startLoop(): void {

    this.timeoutId = setTimeout(() => {

      this.index = (this.index + 1) % this.titles.length;

      this.currentTitle = this.titles[this.index];

      this.startLoop();

    }, 4000);
  }

  ngOnDestroy(): void {
    this.isRunning = false;
    clearTimeout(this.timeoutId);
  }
}