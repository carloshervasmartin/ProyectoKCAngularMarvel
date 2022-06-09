import { Component, Input, OnInit } from '@angular/core';
import { Comic } from '@core/models/comic.model';

@Component({
  selector: 'cm-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.scss']
})
export class CatalogItemComponent implements OnInit {

  @Input()
  comic!: Comic;

  constructor() { }

  ngOnInit(): void {
  }

}
