import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cm-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  searchForm: FormGroup = new FormGroup({
    name: new FormControl<string|null>(null, [Validators.minLength(4)]),
    year: new FormControl<number|null>(null, [Validators.min(1900), Validators.max(2022)]),
  });

  @Output()
  clickSubmit: EventEmitter<{[term: string]: any}> = new EventEmitter<{[term: string]: any}>();

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.searchForm.value);
  }

  submitForm() {
    if(this.searchForm.valid) {
      const filteredFilters = Object.fromEntries(Object.entries(this.searchForm.value).filter(([_, v]) => v != null));
      //this.clickSubmit.emit(this.searchForm.value);
      this.clickSubmit.emit(filteredFilters);
    }
  }


}
