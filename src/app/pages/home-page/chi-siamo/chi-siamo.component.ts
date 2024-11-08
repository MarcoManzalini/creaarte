  import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { OutlinedButtonComponent } from "../../../components/outlined-button/outlined-button.component";

@Component({
  selector: 'app-chi-siamo',
  standalone: true,
  imports: [ButtonModule, OutlinedButtonComponent],
  templateUrl: './chi-siamo.component.html',
  styleUrl: './chi-siamo.component.scss'
})
export class ChiSiamoComponent {

}
