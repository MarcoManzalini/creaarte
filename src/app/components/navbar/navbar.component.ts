import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { HeroComponent } from '../../pages/home-page/hero/hero.component';
import { RouterLink } from '@angular/router';

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
      label: 'Chi sono',
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
  isMobile: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateMenuVisibility();
  }

  private updateMenuVisibility() {
    this.isMobile = window.innerWidth < 768; // Modifica breakpoint se necessario
  }
}
