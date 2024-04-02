import { Component, Input } from '@angular/core';
import { ApiflightService, Companions } from '../apiflight.service';
@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css'],
  providers: [ApiflightService]
})
export class FlightCardComponent {
  flights = this.apiflightService.flights;

  constructor(private apiflightService: ApiflightService){}
}
