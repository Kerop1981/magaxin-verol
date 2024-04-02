import { Component } from '@angular/core';

@Component({
  selector: 'app-scellta',
  templateUrl: './scellta.component.html',
  styleUrls: ['./scellta.component.css']
})
export class ScelltaComponent {
  loading = [false, false, false, false]

  load(index : any){
    this.loading[index] = true;
    setTimeout(() => this.loading[index] = false, 1000);
  }

}
