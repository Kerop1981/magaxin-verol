import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-scelta',
  templateUrl: './scelta.component.html',
  styleUrls: ['./scelta.component.css'],
})
export class SceltaComponent  {

  loading = [false, false, false, false]

  load(index : any){
    this.loading[index] = true;
    setTimeout(() => this.loading[index] = false, 1000);
  }

 
 
}

