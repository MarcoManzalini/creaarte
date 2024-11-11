import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { HeroComponent } from '../../pages/home-page/hero/hero.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  items = [
    {
      label: 'Home',
      route: '#hero'
    },
    {
      label: 'Chi siamo',
      route: '#chi-siamo'
    },
    {
      label: 'Cornici',
      route: '#cornici'
    },
    {
      label: 'Teniche e lavorazioni',
      route: '#tecniche'
    },
    {
      label: 'Contatti',
      route: '#contatti'
    },
  ];
}
