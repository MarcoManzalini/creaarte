import { Component, OnInit } from '@angular/core';
import { ExportedCornice, getCorniciData } from '../../../data/cornici.data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-lavori',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-lavori.component.html',
  styleUrl: './lista-lavori.component.scss',
})
export class ListaLavoriComponent implements OnInit {
  cornici: ExportedCornice[] = [];

  ngOnInit(): void {
    this.cornici = getCorniciData();
  }
}
