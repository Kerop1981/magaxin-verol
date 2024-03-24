import { Component } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent {
  rangeValues: number[] = [50,1200];
  updateRange() {
    console.log('Updated Range:', this.rangeValues);
  }
}
