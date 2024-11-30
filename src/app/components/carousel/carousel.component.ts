import { Component, Input } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { HomeTabItem } from '../../models/carouselItem.model';
import { CarouselModule } from 'primeng/carousel';
import { TabItemComponent } from '../tab-item/tab-item.component';
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    TabViewModule,
    CarouselModule,
    TabItemComponent
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  @Input() sections: HomeTabItem[] = [];
  @Input() white: boolean = false;

  isPhone:boolean = false;

  constructor(private breakpoint: BreakpointObserver){

    this.breakpoint
    .observe(Breakpoints.Handset)
    .subscribe((res) => (this.isPhone = res.matches));
  }

  responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '991px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
}
