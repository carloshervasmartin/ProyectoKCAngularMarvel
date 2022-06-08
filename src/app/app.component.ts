import { Component } from '@angular/core';
import { MenuElement } from '@core/interfaces/menu-element.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'comics';
  menuElements: MenuElement[] = [
    {title: 'Catálogo', path: '/catalogo'},
    {title: 'Colección', path: '/coleccion'},
  ];
  saludar() {
    return 'Hola mundo';
  }

}
