import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-tabmenu',
  templateUrl: './tabmenu.component.html',
  styleUrls: ['./tabmenu.component.css']
})
export class TabmenuComponent implements OnInit{
items: MenuItem[] | undefined;
activeItem: MenuItem | undefined;

constructor(private route:ActivatedRoute){}

ngOnInit(){
  this.items = [
    {label: 'Cheapest',icon:'pi pi-fw pi-home'},
    {label:'Best',icon:'pi pi-fw pi-calendar'},
    {label:'Quickest',icon:'pi pi-fw pi-pencil'},
    {label:'Other sort',icon:'pi pi-fw pi-file'},
    {label: 'Menu', icon: 'pi pi-fw pi-cog'}
  ];
  this.activeItem = this.items[0]
}

onActiveItemChange(event: MenuItem){
  this.activeItem = event;
}

activateLast(){
  this.activeItem = (this.items as MenuItem[])[(this.items as MenuItem[]).length - 1]
}
}
