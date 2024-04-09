import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent {
  rangeValues: number[] = [50,1200];
  @Output() priceChange = new EventEmitter<number[]>();
  updateRange() {
    console.log('Updated Range:', this.rangeValues);
  }

  onPriceChange(event: any){
    this.priceChange.emit(this.rangeValues);
  }
}
