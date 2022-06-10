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

  comics: Comic[] = [
    new Comic({
      id: 1,
      title: 'Iron Man #1',
      description: 'Its the big Premiere! The Invincible Iron Man versus the menaces of Whiplash and AIM. Featuring Nick Fury and SHIELD.',
      images: [{path: 'https://i.annihil.us/u/prod/marvel/i/mg/e/c0/51b5f6dacc2d1/clean.jpg', extension: ''}]
    })
  ];
  page: number = 1;

  constructor(private catalogService: CatalogService){}

  ngOnInit(): void {
  }

  search(search: {[term: string]: any}) {
    console.warn('Búsqueda', search);
    this.catalogService.searchComic(search).subscribe(resp => {
      this.comics = resp;
    });
  }

}
