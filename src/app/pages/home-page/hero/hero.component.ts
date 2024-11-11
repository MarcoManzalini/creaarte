import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { OutlinedButtonComponent } from '../../../components/outlined-button/outlined-button.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    GalleriaModule,
    CommonModule,
    OutlinedButtonComponent,
    ButtonModule,
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  @Input() images: string[] = [];
  corniciLink: string = '#cornici';

  activeIndex = 0;

  next() {
    this.activeIndex =
      this.activeIndex + 1 >= this.images.length ? 0 : this.activeIndex + 1;
  }

  prev() {
    this.activeIndex =
      this.activeIndex - 1 < 0 ? this.images.length - 1 : this.activeIndex - 1;
  }
}
