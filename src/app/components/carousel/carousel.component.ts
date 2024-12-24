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
  /**Dati in input */
  @Input() sections: HomeTabItem[] = [];

  /**Se devono essre bianche o nere le scritte */
  @Input() white: boolean = false;

  /**Se ho delle tabs tra cui navigare o no */
  @Input() tabs: boolean = true;

  /**Se voglio vedere o no i navigatori */
  @Input() navigators:boolean = false;

  isPhone:boolean = false;

  constructor(private breakpoint: BreakpointObserver){

    this.breakpoint
    .observe(Breakpoints.Handset)
    .subscribe((res) => (this.isPhone = res.matches));
  }

  responsiveOptions = [
    {
      breakpoint: '1430px',
      numVisible: 4,
      numScroll: 1,
    },
    {
      breakpoint: '1400px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '1040px',
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
