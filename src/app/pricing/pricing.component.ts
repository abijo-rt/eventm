import { Component } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RadiobuttonComponent } from '../ui/radiobutton/radiobutton.component';
import { ListsComponent } from '../ui/lists/lists.component';
@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [StepperModule,ButtonModule,CheckboxModule,RadioButtonModule,RadiobuttonComponent,ListsComponent],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {

}
