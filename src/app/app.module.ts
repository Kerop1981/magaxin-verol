import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SceltaComponent } from './scelta/scelta.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import { BasicComponent } from './scelta/basic/basic.component';
import { TemplatingComponent } from './scelta/basic/templating/templating.component';
import { KalendarComponent } from './scelta/kalendar/kalendar.component';
import {CheckboxModule} from 'primeng/checkbox';
import { PasangerComponent } from './scelta/pasanger/pasanger.component';
@NgModule({
  declarations: [
    AppComponent,
    SceltaComponent,
    BasicComponent,
    TemplatingComponent,
    KalendarComponent,
    PasangerComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    InputTextModule,
    CascadeSelectModule,
    CalendarModule,
    CheckboxModule,
   
  ],
  exports: [SceltaComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
