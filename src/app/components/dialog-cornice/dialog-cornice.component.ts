import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { Cornice } from '../../../data/cornici.data';
import { ImageModule } from 'primeng/image';
import { tabItem } from '../../models/carouselItem.model';

@Component({
  selector: 'app-dialog-cornice',
  standalone: true,
  imports: [DialogModule,ImageModule],
  templateUrl: './dialog-cornice.component.html',
  styleUrl: './dialog-cornice.component.scss'
})
export class DialogCorniceComponent  {
  @Input() openCornice:tabItem;
  @Input() openDialog: boolean = false;

  @Output() dialogClose = new EventEmitter();

}
