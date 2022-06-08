import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { MenuElement } from '@core/interfaces/menu-element.interface';

@Component({
  selector: 'cm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges{

  // Data binding entrada
  @Input()
  menuElements: MenuElement[] = [];

  // Data binding salida
  @Output()
  rightElementClicked: EventEmitter <boolean> = new EventEmitter<boolean>();

  //Two-way data binding
  @Input()
  tema: string = 'claro';
  @Output()
  temaChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log(this.menuElements);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  ngOnChanges(): void {
    console.log('ngOnChanges');
  }

  rightElementClick(){

    this.temaChange.emit('Mucho Betis');

    this.rightElementClicked.emit(true);
  }

}
