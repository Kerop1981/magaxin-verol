import { Component } from '@angular/core';
import { ApiflightService, Companions } from '../apiflight.service';
@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent {
  flights = this.apiflightService.flights
  filteredFlights: Companions[] = []; // Добавляем новое свойство для отфильтрованных рейсов

  constructor(private apiflightService: ApiflightService){ // это умный компонентн,тот который работает с сервисами
    this.flights = apiflightService.flights; // Загружаем все рейсы при инициализации компонента
    this.filteredFlights = [...this.flights]; // Начально отображаем все рейсы
  } 

  // Метод для фильтрации рейсов по цене
  filterFlightsByPrice(minPrice: number, maxPrice: number){
    this.flights = this.apiflightService.flights.filter(
      flight => flight.price >= minPrice && flight.price <= maxPrice)
  }
}
 