import { Component, OnInit } from '@angular/core';
import { StranaService ,Flight} from '../../scellta/strana.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  flights: Flight[] = [];
  flightOptions: string[] = [];
  selectedFlight: Flight | undefined;

  constructor( private StranaService : StranaService){}

  ngOnInit(): void {
    this.flights = this.StranaService.getFlights();
    this.flightOptions = this.flights.map(flight => flight.departureAirport);
  }

}
