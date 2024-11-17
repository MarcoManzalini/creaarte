import { Component, OnInit } from '@angular/core';
import { exportedTecnica, getTecniche, getTenicheGrouped, GroupedTecniche } from '../../../data/tecniche.data';
import { CommonModule } from '@angular/common';
import { ShowTecnicaComponent } from "./show-tecnica/show-tecnica.component";
import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-lista-tecniche',
  standalone: true,
  imports: [CommonModule, ShowTecnicaComponent, TabViewModule],
  templateUrl: './lista-tecniche.component.html',
  styleUrl: './lista-tecniche.component.scss'
})
export class ListaTecnicheComponent implements OnInit {
  groupedTecniche: GroupedTecniche[] = [];

  ngOnInit(): void {
    this.groupedTecniche = getTenicheGrouped();
    console.log(this.groupedTecniche)
  }
}
