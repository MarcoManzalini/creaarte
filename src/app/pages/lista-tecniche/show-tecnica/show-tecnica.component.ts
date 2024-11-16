import { Component, Input } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { exportedTecnica } from '../../../../data/tecniche.data';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-show-tecnica',
  standalone: true,
  imports: [GalleriaModule],
  templateUrl: './show-tecnica.component.html',
  styleUrl: './show-tecnica.component.scss',
})
export class ShowTecnicaComponent {
  @Input() tecnica: exportedTecnica;
  @Input() inversed: boolean = false;

  constructor(private sanitizer: DomSanitizer) {}

  descrizioneSanitezed(descrizione: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(descrizione);
  }
}
