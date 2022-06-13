import { Component, Input, OnInit } from '@angular/core';
import { Image } from '@core/interfaces/image.interface';
import { Comic } from '@core/models/comic.model';
import { CatalogService } from '../../services/catalog.service';

@Component({
  selector: 'cm-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.scss']
})
export class CatalogListComponent implements OnInit {

  comics: Comic[] = [];
  page: number = 1;
  totalPages: number = 1;
  actualFilters: {[term: string]: any} = {};
  limit: number = 20;

  constructor(public catalogService: CatalogService){}

  ngOnInit(): void {
    this.catalogService.comic$.subscribe((comics) => {
      if (comics) {
        this.comics = comics;
      }
  }

  search(search: {[term :string]: any}) {
    console.warn('Búsqueda', search);
    this.actualFilters = search;
    this.catalogService.searchComic(this.actualFilters);
    });
    this.catalogService.pagination$.subscribe((pagination) => {
      this.page = pagination.page;
      this.totalPages = pagination.totalPages;
      this.limit = pagination.limit;
    });
  }

  changePage() {
    this.actualFilters = { ...this.actualFilters, offset: (this.page - 1) * this.limit };
    this.search(this.actualFilters);
  }

  viewDetail(comic: Comic) {
    this.catalogService.viewComic(comic);
  }


}


