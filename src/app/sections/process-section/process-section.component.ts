import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-process-section',
  standalone: true,
  imports: [NgFor],
  templateUrl: './process-section.component.html',
  styleUrl: './process-section.component.scss'
})
export class ProcessSectionComponent {

  steps = [
    {
      title: 'Diagnóstico inicial',
      description: 'Entendemos o seu momento atual, objetivos e necessidades específicas.'
    },
    {
      title: 'Planeamento estratégico',
      description: 'Definimos a melhor estrutura digital para o seu posicionamento.'
    },
    {
      title: 'Desenvolvimento e implementação',
      description: 'Construímos sua presença digital com foco em clareza e profissionalismo.'
    },
    {
      title: 'Acompanhamento e evolução',
      description: 'Ajustamos e evoluímos conforme o seu crescimento e objetivos.'
    }
  ];

}