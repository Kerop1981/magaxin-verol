import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ScelltaComponent } from './scellta/scellta.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import { BasicComponent } from './scellta/basic/basic.component';
import { TemplatingComponent } from './scellta/templating/templating.component';
import { KalendarComponent } from './scellta/kalendar/kalendar.component';
import {CheckboxModule} from 'primeng/checkbox';
import { PasangerComponent } from './scellta/pasanger/pasanger.component';
import {ButtonModule} from 'primeng/button';
import { FiltersComponent } from './filters/filters.component';
import { PriceComponent } from './filters/price/price.component';
import { DeparturetimeComponent } from './filters/departuretime/departuretime.component';
import { RatingComponent } from './filters/rating/rating.component';
import { AirlinesComponent } from './filters/airlines/airlines.component';
import {SliderModule} from 'primeng/slider';
import { AccordionModule } from 'primeng/accordion';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TripsComponent } from './filters/trips/trips.component';
import { TabmenuComponent } from './tabmenu/tabmenu.component';
import { TabMenuModule } from 'primeng/tabmenu';
import {   RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FlightCardComponent } from './flight/flight-card/flight-card.component';
import { FlightListComponent } from './flight/flight-list/flight-list.component';

;
@NgModule({
  declarations: [
    AppComponent,
    TemplatingComponent,
    KalendarComponent,
    PasangerComponent,
    FiltersComponent,
    PriceComponent,
    DeparturetimeComponent,
    RatingComponent,
    AirlinesComponent,
    TripsComponent,
    TabmenuComponent,
    MainPageComponent,
    FlightCardComponent,
    FlightListComponent,
    ScelltaComponent,
    BasicComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    InputTextModule,
    CascadeSelectModule,
    CalendarModule,
    CheckboxModule,
    ButtonModule,
    SliderModule,
    AccordionModule,
    SelectButtonModule,
    TabMenuModule,
    RouterModule.forRoot([
      {
        path: '',
        component: MainPageComponent
      }
    ]),
   

  ],
  
  exports: [ScelltaComponent],
  providers: [ RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
