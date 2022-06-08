import { Component, Input, OnInit } from '@angular/core';
import { MenuElement } from '@core/interfaces/menu-element.interface';

@Component({
  selector: 'cm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  menuElements: MenuElement[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
