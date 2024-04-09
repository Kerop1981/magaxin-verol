import { Injectable } from '@angular/core';

export interface Companions {
  company: string,
  price: number,
  time: string,
  logoUrl: string
}

@Injectable({
  providedIn: 'root'
})
export class ApiflightService {

  constructor() { }

  flights: Companions[] = [
   {
    company:'Emirates',
    price:104,
    time: '12:00 pm - 01:28 pm',
    logoUrl: 'assets/Emirates.jpg'
   },
   {
    company:'Fludubai',
    price:125,
    time:'10:35 pm - 00:30 pm',
    logoUrl:'assets/Fludubai.jpg '
   },
   {
    company:'Qatar',
    price:135,
    time:'10:35 pm - 00:30 pm',
    logoUrl:'assets/Qatar.jpg'
   },
   {
    company:'Etihad',
    price:150,
    time:'8:35 pm - 11:30 pm',
    logoUrl:' assets/Etihad.jpg'
   }
  ]
}
