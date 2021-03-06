import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { CategoriesComponent } from './categories/categories.component';
import { ResultsComponent } from './results/results.component';
import { StoreDetailsComponent } from './store-details/store-details.component';

const routes: Routes = [
  {path:'', component:CategoriesComponent},
  {path:'results/:type', component:ResultsComponent},
  {path:'store-details', component:StoreDetailsComponent},
  {path:'basket', component:BasketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
