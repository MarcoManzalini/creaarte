import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { OutlinedButtonComponent } from '../../../components/outlined-button/outlined-button.component';
import { ButtonModule } from 'primeng/button';
import { homePage } from '../../../../data/home-page.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    GalleriaModule,
    CommonModule,
    OutlinedButtonComponent,
    ButtonModule
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit{
  @Input() images: string[] = [];

  activeIndex = 0;
  whiteText = false;
  isPhone:boolean = false;

  ngOnInit(): void {
    const ua = navigator.userAgent;
    this.isPhone =  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua)

    this.changeTextColor(0);
  }

  changeImage(type:'add' | 'sub'){
    this.activeIndex = type === 'add' ?
      this.activeIndex + 1 >= this.images.length ? 0 : this.activeIndex +  1  :
      this.activeIndex - 1 < 0 ? this.images.length - 1 : this.activeIndex - 1;
    
      console.log(this.activeIndex);


      this.changeTextColor(this.activeIndex);
  }


  changeTextColor(event){
    this.whiteText = this.isPhone ? homePage.mobileHeroImages[event].includes('w') : homePage.heroImages[event].includes('w');
  }
  
}
