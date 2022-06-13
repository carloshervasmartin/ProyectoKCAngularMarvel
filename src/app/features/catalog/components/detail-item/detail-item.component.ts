import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Comic } from '@core/models/comic.model';
import { ComicStateService } from '@core/services/comic-state.service';
import { CatalogService } from '../../services/catalog.service';

@Component({
  selector: 'cm-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.scss']
})
export class DetailItemComponent implements OnInit {

  id?: number;
  comic?: Comic;
  comicstateservice: any;

  constructor(public catalogService: CatalogService) { }

  ngOnInit(): void {
    this.catalogService.getSelected$().subscribe(
      (comic) => {
        if (comic !== null){
          this.comic = comic;
        };
      }
    )

  }

  addToCollection(){
    this.comicstateservice.addToCollection(this.comic);
  }

}
