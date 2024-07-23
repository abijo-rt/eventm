import { Component } from '@angular/core';
import { LoadingComponent } from '../ui/loading/loading.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoadingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
