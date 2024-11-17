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
import { OutlinedButtonComponent } from '../../components/outlined-button/outlined-button.component';
import { TabItemComponent } from "../../components/tab-item/tab-item.component";

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

  ngOnInit(): void {
    this.cornici = getCorniciData();
    this.groupedCornici = groupCorniciByEpoca();

    console.log(this.cornici)
  }
}
