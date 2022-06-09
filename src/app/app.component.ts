import { Component } from '@angular/core';
import { MenuElement } from '@core/interfaces/menu-element.interface';
import { Image } from '@core/interfaces/image.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = '😀';
  loading: boolean = false;
  menuElements: MenuElement[] = [
    {title: 'Catálogo', path: '/catalog'},
    {title: 'Colección', path: '/collection'},
  ];
  imageElements: Image[] = [
    {path: 'https://i.pinimg.com/originals/82/bf/db/82bfdb84747c0fbb4cfed58cfc5365a2.jpg', extension: 'jpg'},
    {path: 'https://i.pinimg.com/originals/82/bf/db/82bfdb84747c0fbb4cfed58cfc5365a2.jpg', extension: 'jpg'},
  ]
  ;

  saludar() {
    console.log('Hola mundo');
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 6000);
  }

}
