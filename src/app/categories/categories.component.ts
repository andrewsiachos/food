import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {


  categories:any = [];

  constructor(private food: FoodService, private router: Router) { }

  ngOnInit(): void {
    this.categories = this.food.getCategories();
  }


  onSelectCategory(type:string, name: string){
    this.food.categoryType(type, name);
    this.router.navigate(['results','type']);
  }
}
