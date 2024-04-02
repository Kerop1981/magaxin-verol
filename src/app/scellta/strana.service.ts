import { Injectable } from '@angular/core';

export interface Flight {
  company: string;
  price: number;
  departureAirport: string;
  arrivalAirport: string;
  departureTime: string;
  pasangersClass: string;
}

@Injectable({
  providedIn: 'root'
})

export class StranaService {
  
  flights: Flight[] = [
    {
      company: 'Emirates',
      price: 104,
      departureAirport: 'Dubai Airport',
      arrivalAirport: 'Moscow Vnukovo',
      departureTime: '07.Nov.22 - 13.Nov.22',
      pasangersClass: '1-pasanger|Econom'
    },
    {
      company: 'QATAR',
      price: 98,
      departureAirport: 'Yerevan Zvarnots',
      arrivalAirport: 'Moscow Vnukovo',
      departureTime: '08.Mart.22 - 17.Aprel.22',
      pasangersClass: '1-pasanger|Premiym'
    },
  ]
  constructor() { }

  getFlights(): Flight[]{
    return this.flights;
  }
}
