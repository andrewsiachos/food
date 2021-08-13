import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.scss']
})
export class StoreDetailsComponent implements OnInit {

  store:{name: string, image: string} = {name:'ψησταριά', image:'../../assets/images/psistaria.jpg'};
  constructor(private food: FoodService) { }

  ngOnInit(): void {
    //this.store = this.food.selectedStore;
    //console.log(this.store);
  }

}
