import { Injectable } from '@angular/core';
import { StateService } from '@core/interfaces/state-service.interface';
import { Comic } from '@core/models/comic.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComicStateService implements StateService<Comic>{

  private loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private elements$: BehaviorSubject<Comic[] | null> = new BehaviorSubject<Comic[] | null>([]);
  private selected$: BehaviorSubject<Comic | null> = new BehaviorSubject<Comic | null>(null);

  constructor() { }

  isLoading$(): Observable<boolean> {
    return this.loading$.asObservable();
  }
  setLoading(isLoading: boolean): void {
    this.loading$.next(isLoading);
  }
  get$(): Observable<Comic[] | null> {
    return this.elements$.asObservable();
  }
  set(elements: Comic[]): void {
    this.elements$.next(elements);
  }
  getSelected$(): Observable<Comic | null> {
    return this.selected$.asObservable();
  }
  setSelected(data: Comic): void {
    this.selected$.next(data);
  }
}
