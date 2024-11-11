import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-outlined-button',
  standalone: true,
  imports: [ButtonModule,RouterLink],
  templateUrl: './outlined-button.component.html',
  styleUrl: './outlined-button.component.scss'
})
export class OutlinedButtonComponent {
  @Input() text = '';
  @Input() icon = '';
  @Input() link = '#';
  @Input() white = true;
  @Input() rounded = true;

  @Output() clicked = new EventEmitter();
}
