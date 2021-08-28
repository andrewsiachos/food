import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  basketOrder = [];
  totalPrice = 0;
  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.basketOrder = this.basketService.order;
    for(let x of this.basketOrder){
      this.totalPrice += parseFloat(x.price);
    }

    this.myParseFloat(this.totalPrice);
  }

  myParseFloat(num){
    num = parseFloat(num).toFixed(2);
  }

}
