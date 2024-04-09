import { Component, Input } from '@angular/core';
import { Companions } from '../apiflight.service';


@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css'],
})
export class FlightCardComponent {

@Input() logoUrl: string = ''
@Input() price: number = 0
@Input() time: string = ''



}
