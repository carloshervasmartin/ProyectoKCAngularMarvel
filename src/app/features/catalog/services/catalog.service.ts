import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiResponse } from '@core/interfaces/api-response';
import { Pagination } from '@core/interfaces/pagination.interface';
import { Comic } from '@core/models/comic.model';
import { CollectionApiService } from '@core/services/collection-api.service';
import { ComicApiService } from '@core/services/comic-api.service';
import { ComicStateService } from '@core/services/comic-state.service';
import { environment } from '@env/environment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private comicApi: ComicApiService, private comicState: ComicStateService, private router: Router, private collectionApi: CollectionApiService) {}

  get comic$(): Observable<Comic[] | null> {
    return this.comicState.get$();
  };

  get pagination$(): Observable<Pagination>{
    return this.comicState.getPagination$();
  }

  get loading$(): Observable<boolean> {
    return this.comicState.isLoading$();
  }


  searchComic(filters?: {[term: string]: any}) {
    this.comicState.setLoading(true)
    this.comicApi
    .list(filters)
    .pipe(finalize(() => this.comicState.setLoading(false)))
    .subscribe((resp) => {
      this.comicState.set(resp.results);
      this.comicState.setPagination({
        page : (resp.offset/resp.limit) + 1,
        totalPages : Math.ceil(resp.total/resp.limit),
        limit : resp.limit
      })
    }
    );
  }


  viewComic(comic:Comic){
    this.comicState.setSelected(comic),
    this.router.navigate(['catalog/list/detail'])
  }

  addToCollection(comic: Comic){
    comic.id = undefined,
    this.collectionApi.add(comic).subscribe((resp) => {console.log(resp)})
  }

  }
