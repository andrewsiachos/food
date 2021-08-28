import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { ResultsComponent } from './results/results.component';
import { StoreDetailsComponent } from './store-details/store-details.component';
import { FooterComponent } from './footer/footer.component';
import { DetailsSectionComponent } from './store-details/details-section/details-section.component';
import { FoodModalComponent } from './shared/food-modal/food-modal.component';
import { BasketComponent } from './basket/basket.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    ResultsComponent,
    StoreDetailsComponent,
    FooterComponent,
    DetailsSectionComponent,
    FoodModalComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
