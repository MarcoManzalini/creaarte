import { Component, Input } from '@angular/core';
import { tabItem } from '../../models/carouselItem.model';
import { OutlinedButtonComponent } from "../outlined-button/outlined-button.component";
import { DialogCorniceComponent } from '../dialog-cornice/dialog-cornice.component';

@Component({
  selector: 'app-tab-item',
  standalone: true,
  imports: [OutlinedButtonComponent,DialogCorniceComponent],
  templateUrl: './tab-item.component.html',
  styleUrl: './tab-item.component.scss'
})
export class TabItemComponent {
  @Input() tabData: tabItem;
  @Input() tipo: string = '';
  @Input() white: boolean = false

  dialogVisible: boolean = false;

  open(){
    this.dialogVisible = true;
    console.log(this.tabData,this.dialogVisible);
  }
}
