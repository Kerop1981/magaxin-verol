import { Component } from '@angular/core';
import { Flight,StranaService } from '../strana.service';

@Component({
  selector: 'app-templating',
  templateUrl: './templating.component.html',
  styleUrls: ['./templating.component.css']
})
export class TemplatingComponent {
  flights: Flight[] = [];
  flightOptions: string[] = [];
  selectedFlight: Flight | undefined;

constructor( private StranaService : StranaService){}

ngOnInit(): void {
  this.flights = this.StranaService.getFlights();
  this.flightOptions = this.flights.map(flight => flight.arrivalAirport);
}
}
