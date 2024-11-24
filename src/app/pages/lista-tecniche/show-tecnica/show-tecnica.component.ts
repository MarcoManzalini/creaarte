import { Component, Input } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { exportedTecnica, groupedItem } from '../../../../data/tecniche.data';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TagModule } from 'primeng/tag';
import { TabViewModule } from 'primeng/tabview';
import { OutlinedButtonComponent } from "../../../components/outlined-button/outlined-button.component";

@Component({
  selector: 'app-show-tecnica',
  standalone: true,
  imports: [GalleriaModule, TagModule, TabViewModule, OutlinedButtonComponent],
  templateUrl: './show-tecnica.component.html',
  styleUrl: './show-tecnica.component.scss',
})
export class ShowTecnicaComponent {
  @Input() tecnica: groupedItem;
  @Input() inversed: boolean = false;


  constructor(private sanitizer: DomSanitizer) {}

  descrizioneSanitezed(descrizione: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(descrizione);
  }
}
