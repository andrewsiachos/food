import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BasketService } from 'src/app/basket.service';

@Component({
  selector: 'app-food-modal',
  templateUrl: './food-modal.component.html',
  styleUrls: ['./food-modal.component.scss']
})
export class FoodModalComponent implements OnInit {

  //@Input() food:{name, price:} ={name:'', price:''};
  @Input() food;
  @Output() close = new EventEmitter<void>();

  quantity:number = 1.00;
  price;

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.food.price = this.food.price.replace("€", '');
    this.price = (parseFloat(this.food.price) * this.quantity).toFixed(2);
  }

  closeModal(){
    this.close.emit();
  }
  increment(){
    this.quantity += 1;
    this.price = (Number(this.food.price) * this.quantity).toFixed(2);

  }
  decrement(){
    if(this.quantity != 1){
      this.quantity -= 1;
      this.price = (Number(this.food.price) * this.quantity).toFixed(2);

    }
  }

  sendToBasket(){
    this.basketService.addToOrder({name:this.food.name, quantity: this.quantity, price:this.price});
    this.closeModal();

  }

}
