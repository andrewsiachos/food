import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.scss']
})
export class StoreDetailsComponent implements OnInit {

  store:{name: string, image: string} = {name:'', image:''};
  currentStoreProducts:any = [];
  show:boolean = false;
  itemForBasket:{name: string, price: string} = {name: '', price:''};
  constructor(private food: FoodService) { }

  ngOnInit(): void {
    this.store = this.food.selectedStore;
    this.currentStoreProducts = this.food.storeProducts;
  }

  handleClose(){
    this.show = false;
  }

  handleSelectedItem(event:any){
    this.show = true;
    this.itemForBasket = {
      name: event.selectedName,
      price: event.selectedPrice
    };
  }

}
