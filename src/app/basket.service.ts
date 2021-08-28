import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  order= [

  ];
  constructor() { }

  addToOrder(newOrder){
    this.order.push(newOrder);
  }
}
