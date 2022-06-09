import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cm-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input()
  totalPages: number = 1;

  @Input()
  page: number = 1;
  @Output()
  pageChange: EventEmitter<number> = new EventEmitter<number>();

  numbers: number[] = [1];


  constructor() { }

  ngOnInit(): void {

      //this.numbers = Array.from(Array(this.totalPages).keys()).map(i => i + 1);
      this.numbers = Array(this.totalPages).fill(0).map((x, i) => i + 1);

  }

  clickPage(page: number) {
    if (page > 0 && page <= this.totalPages) {
      this.page = page;
      this.pageChange.emit(page);
    }

  }

}
