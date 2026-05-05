import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-pricing-section',
  standalone: true,
  imports: [NgFor],
  templateUrl: './pricing-section.component.html',
  styleUrl: './pricing-section.component.scss'
})
export class PricingSectionComponent {

  plans = [
    {
      name: 'Presença Inicial',
      subtitle: 'Comece com uma base sólida, profissional e confiável.',
      features: [
        'Website profissional e responsivo',
        'Estrutura essencial de páginas',
        'Identidade visual simples e elegante',
        'SEO básico',
        'Integração com WhatsApp',
        'Orientação inicial'
      ],
      cta: 'Começar com segurança',
      whatsapp: 'https://wa.me/SEUNUMERO?text=Quero saber mais sobre o plano Presença Inicial'
    },
    {
      name: 'Crescimento & Conversão',
      subtitle: 'Transforme sua presença digital em um canal ativo de novos pacientes.',
      features: [
        'Reestruturação estratégica do website',
        'Otimização de comunicação',
        'SEO para o seu nicho',
        'Captação de leads',
        'Integrações de contacto',
        'Foco em conversão',
        'Orientação contínua'
      ],
      cta: 'Atrair e converter melhor',
      highlight: true,
      whatsapp: 'https://wa.me/SEUNUMERO?text=Quero saber mais sobre o plano Crescimento & Conversão'
    },
    {
      name: 'Reposicionamento Digital',
      subtitle: 'Atualize sua imagem digital e recupere relevância no mercado.',
      features: [
        'Redesign completo',
        'Nova identidade digital',
        'Reposicionamento estratégico',
        'Estratégia de conteúdo',
        'SEO avançado',
        'Presença profissional completa',
        'Consultoria personalizada'
      ],
      cta: 'Atualizar minha presença',
      whatsapp: 'https://wa.me/SEUNUMERO?text=Quero saber mais sobre o plano Reposicionamento Digital'
    }
  ];

}