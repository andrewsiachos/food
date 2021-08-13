import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  selectedType = '';
  selectedName = '';
  results:any = [];
  resultsAmount = 0;

  constructor(private route:ActivatedRoute, private food: FoodService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.selectedType = params['type'];
    });
    this.selectedName = this.food.selectedCategoryName;
    this.results = this.food.selectedStores;
    this.resultsAmount = this.results.length;
  }

  onSelectStore(i:any){
    this.food.storeSelected(i);
    this.router.navigate(['store-details']);
  }

}
