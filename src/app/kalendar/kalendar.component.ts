import { Component } from '@angular/core';
import { StranaService,Flight } from '../basic/strana.service';

@Component({
  selector: 'app-kalendar',
  templateUrl: './kalendar.component.html',
  styleUrls: ['./kalendar.component.css']
})
export class KalendarComponent {
  flights: Flight[] = [];
  flightOptions: string[] = [];
  selectedFlight: Flight | undefined;
  checked: boolean = false;

  constructor( private StranaService : StranaService){}

  ngOnInit(): void {
    this.flights = this.StranaService.getFlights();
    this.flightOptions = this.flights.map(flight => flight.departureTime);
    
  }
}
