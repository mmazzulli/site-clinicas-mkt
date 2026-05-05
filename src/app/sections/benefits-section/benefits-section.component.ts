import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-benefits-section',
  standalone: true,
  imports: [NgFor],
  templateUrl: './benefits-section.component.html',
  styleUrl: './benefits-section.component.scss'
})
export class BenefitsSectionComponent {

  benefits = [
    {
      title: 'Mais confiança desde o primeiro contacto',
      description: 'Seus pacientes percebem profissionalismo antes mesmo da primeira consulta.'
    },
    {
      title: 'Comunicação clara e alinhada com o seu propósito',
      description: 'Sua mensagem deixa de ser genérica e passa a refletir quem você realmente é.'
    },
    {
      title: 'Atração de pacientes mais qualificados',
      description: 'Você passa a atrair pessoas que valorizam o seu trabalho.'
    },
    {
      title: 'Presença digital que evolui com você',
      description: 'Uma base preparada para crescer junto com sua carreira.'
    }
  ];

//   benefits = [
//   'Alcance pacientes que realmente valorizam o seu trabalho',
//   'Transmita confiança desde o primeiro contacto',
//   'Organize sua comunicação de forma clara e profissional',
//   'Diferencie-se de outros profissionais da sua área',
//   'Fortaleça sua presença online com consistência',
//   'Tenha uma base digital pronta para crescer',
//   'Simplifique o processo de contacto com seus pacientes'
// ];

}