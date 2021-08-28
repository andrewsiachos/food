import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-details-section',
  templateUrl: './details-section.component.html',
  styleUrls: ['./details-section.component.scss']
})
export class DetailsSectionComponent implements OnInit {

  @Input() product:any;
  @Output() selectedItem = new EventEmitter<{selectedName: string, selectedPrice: string}>();
  constructor() { }

  ngOnInit(): void {
  }

  selectItem(name:string, price: string, comment: string){
    this.selectedItem.emit({
      selectedName: name,
      selectedPrice: price
    });
  }

}
