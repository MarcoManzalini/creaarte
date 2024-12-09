import { Component, Input, OnInit } from '@angular/core';
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
export class TabItemComponent implements OnInit{
  @Input() tabData: tabItem;
  @Input() tipo: string = '';
  @Input() white: boolean = false
  @Input() dialogOpen: boolean = true;

  dialogVisible: boolean = false;
  isPhone: boolean = false;

  ngOnInit(): void {
    const ua = navigator.userAgent;
    this.isPhone =  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua)
  }

  open(){
    this.dialogVisible = true;
  }
}
