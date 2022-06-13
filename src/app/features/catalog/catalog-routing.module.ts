import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog.component';
import { DetailItemComponent } from './components/detail-item/detail-item.component';
import { CatalogListComponent } from './pages/catalog-list/catalog-list.component';

const routes: Routes = [{path: '', component: CatalogComponent,
children:[{path: 'list', component: CatalogListComponent},
{path: '', redirectTo: 'list', pathMatch: 'full'},
{path: 'list/detail', component: DetailItemComponent},
//{path: 'list/:id', component: DetailItemComponent},
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
