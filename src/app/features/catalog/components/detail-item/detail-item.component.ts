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
  /*id: number = 0;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = ComicStateService.getSelected$().value.id;
    });*/

  id?: number;
  comic?: Comic;

  constructor(private route : ActivatedRoute) {};


  ngOnInit(): void {
    let aux =(this.route.snapshot.paramMap.get('id'));
    this.id = +(aux?aux:'');

    this.comic = ComicStateService.getSelected$();

  }

  addToCollection(){
    
  }

}
