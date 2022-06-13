import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';
import { CatalogListComponent } from './pages/catalog-list/catalog-list.component';
import { SharedModule } from '@shared/shared.module';
import { CatalogItemComponent } from './components/catalog-item/catalog-item.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailItemComponent } from './components/detail-item/detail-item.component';


@NgModule({
  declarations: [
    CatalogComponent,
    CatalogListComponent,
    CatalogItemComponent,
    SearchFormComponent,
    DetailItemComponent
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CatalogModule { }
