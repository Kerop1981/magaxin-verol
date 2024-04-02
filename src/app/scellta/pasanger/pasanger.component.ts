import { Component } from '@angular/core';
import {StranaService ,Flight } from '../strana.service';



@Component({
  selector: 'app-pasanger',
  templateUrl: './pasanger.component.html',
  styleUrls: ['./pasanger.component.css']
})
export class PasangerComponent {
  flights: Flight[] = [];
  flightOptions: string[] = [];
  selectedFlight: Flight | undefined;
  checked: boolean = false;

  constructor( private StranaService : StranaService){}

  ngOnInit(): void {
    this.flights = this.StranaService.getFlights();
    this.flightOptions = this.flights.map(flight => flight.pasangersClass);
    
  }
}
