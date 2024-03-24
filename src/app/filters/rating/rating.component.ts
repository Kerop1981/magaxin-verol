import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
  value!: number;
    
  paymentOptions: any[] = [
      { name: '1+', value: 1 },
      { name: '2+', value: 2 },
      { name: '3+', value: 3 },
      { name: '4+', value: 4 }
  ];
}
