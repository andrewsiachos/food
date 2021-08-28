import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from './food.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'food';
  myProducts:any = [];
  constructor(private router: Router, private food:FoodService){}

  ngOnInit(){
    this.myProducts = this.food.storeProducts;
  }

  navigateHome(){
    this.router.navigate(['']);
  }

  toBasket(){
    this.router.navigate(['/basket']);
  }

}
