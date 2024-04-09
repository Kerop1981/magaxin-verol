import { Component } from '@angular/core';
import { ApiflightService, Companions } from '../apiflight.service';
@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent {
  flights = this.apiflightService.flights


  constructor(private apiflightService: ApiflightService){} // это умный компонентн,тот который работает с сервисами
}
 