import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-tab-menu-component',
  templateUrl: './tab-menu-component.component.html',
  styleUrls: ['./tab-menu-component.component.scss']
})
export class TabMenuComponentComponent implements OnInit {
  items: MenuItem[] = [];
  activeItem: MenuItem ={};
  ngOnInit(): void {
    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/'},
      {label: 'Table page', icon: 'pi pi-fw pi-table', routerLink:'table-page'},
      {label: 'Form', icon: 'pi pi-fw pi-pencil', routerLink: 'Form'}
  ];
  }

}
