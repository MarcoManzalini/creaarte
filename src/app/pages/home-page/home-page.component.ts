import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { GalleriaModule } from 'primeng/galleria';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';

export interface HomeTabItem {
  name: string;
  items: {
    url: string;
    name: string;
    buttonText: string;
    subText: string;
  }[];
}

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeroComponent, GalleriaModule, ChiSiamoComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  heroImages = [
    'https://static01.nyt.com/images/2024/04/28/multimedia/28sp-museums-dark-04-lvhc/28sp-museums-dark-04-lvhc-articleLarge.jpg?quality=75&auto=webp&disable=upscale,',
    'https://cdn.sanity.io/images/x76dkvvf/prod/eb300e3bee9af43a2db1b940ab0cd4a37b150190-3000x2000.jpg?auto=format&w=3840&q=75',
    'https://eskerfoundation.com/assets/Esker_DeannaBowen_005.jpg',
  ];

  tecnicheTab: HomeTabItem[] = [{ name: 'Doratura', items: [] },{ name: 'Intaglio', items: [] }, {name: 'Restauro', items: [] }];

  corniciTab: HomeTabItem[] = [{ name: 'Antiche', items: [] },{ name: 'Moderne', items: [] }];
}
