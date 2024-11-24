import { Component, OnInit } from '@angular/core';
import { getTenicheGrouped, GroupedTecniche } from '../../../data/tecniche.data';
import { CommonModule } from '@angular/common';
import { ShowTecnicaComponent } from "./show-tecnica/show-tecnica.component";
import { TabViewModule } from 'primeng/tabview';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-lista-tecniche',
  standalone: true,
  imports: [CommonModule, ShowTecnicaComponent, TabViewModule],
  templateUrl: './lista-tecniche.component.html',
  styleUrl: './lista-tecniche.component.scss'
})
export class ListaTecnicheComponent implements OnInit {
  groupedTecniche: GroupedTecniche[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.groupedTecniche = getTenicheGrouped();
    
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });


  }
}
