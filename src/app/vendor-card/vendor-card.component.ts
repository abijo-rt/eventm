import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vendor-card',
  standalone: true,
  imports: [],
  templateUrl: './vendor-card.component.html',
  styleUrl: './vendor-card.component.css'
})
export class VendorCardComponent {
@Input() name:string|undefined;
@Input() address:string|undefined;
@Input() type:string|undefined;
icon:string|undefined;
}
