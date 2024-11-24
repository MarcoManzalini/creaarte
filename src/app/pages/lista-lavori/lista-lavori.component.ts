import { Component, OnInit } from '@angular/core';
import {
  Cornice,
  ExportedCornice,
  getCorniciData,
  groupCorniciByEpoca,
  GroupedCornice,
} from '../../../data/cornici.data';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { TabItemComponent } from "../../components/tab-item/tab-item.component";
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-lista-lavori',
  standalone: true,
  imports: [CommonModule, TabViewModule, TabItemComponent],
  templateUrl: './lista-lavori.component.html',
  styleUrl: './lista-lavori.component.scss',
})
export class ListaLavoriComponent implements OnInit {
  cornici: ExportedCornice[] = [];
  groupedCornici: GroupedCornice[] = [];
  dialogVisible: boolean = false;
  openCornice: Cornice;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.cornici = getCorniciData();
    this.groupedCornici = groupCorniciByEpoca();

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
}
