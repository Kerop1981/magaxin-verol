import { Component } from '@angular/core';

@Component({
  selector: 'app-departuretime',
  templateUrl: './departuretime.component.html',
  styleUrls: ['./departuretime.component.css']
})
export class DeparturetimeComponent {
  rangeValues: number[] = [200,800];
  selectedTime: string = '';
  updateTime() {
    this.selectedTime = this.formatTime(this.rangeValues[0]) + ' - ' + this.formatTime(this.rangeValues[1]);
  }

  formatTime(value: number): string {
    const hours = Math.floor(value / 60);
    const minutes = value % 60;
    return ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2);
}
}