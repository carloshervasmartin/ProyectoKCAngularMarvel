import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comic } from '@core/models/comic.model';
import { CatalogService } from '../../services/catalog.service';

@Component({
  selector: 'cm-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.scss']
})
export class CatalogItemComponent implements OnInit {



  @Input()
  comic!: Comic;

  @Output()
  click: EventEmitter<Comic> = new EventEmitter<Comic>();

  constructor(public catalogService: CatalogService) { }

  ngOnInit(): void {
  }

  getImageUrl() {
    if (this.comic.images && this.comic.images.length > 0 && this.comic.images[0].path) {
      return this.comic.images[0].path + '/portrait_fantastic.' + this.comic.images[0].extension;
    }else{
      return 'https://i.blogs.es/85aa44/stan-lee/1366_2000.jpg';
    }

  }

  clickElement() {
    this.catalogService.setSelected$(this.comic);
  }


}
