import { Component, Input } from '@angular/core';
import { tabItem } from '../../models/carouselItem.model';
import { OutlinedButtonComponent } from "../outlined-button/outlined-button.component";

@Component({
  selector: 'app-tab-item',
  standalone: true,
  imports: [OutlinedButtonComponent],
  templateUrl: './tab-item.component.html',
  styleUrl: './tab-item.component.scss'
})
export class TabItemComponent {
  @Input() tabData: Partial<tabItem> = {};
  @Input() tipo: string = '';
  @Input() white: boolean = false;
}
