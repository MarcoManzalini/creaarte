import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';

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
    },
    {
      label: 'Chi siamo',
    },
    {
      label: 'Teniche e lavorazioni',
    },
    {
      label: 'Cornici',
    },
    {
      label: 'Contatti',
    },
  ];
}
