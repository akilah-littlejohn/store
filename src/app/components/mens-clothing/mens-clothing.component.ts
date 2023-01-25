import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
//import { SortService } from 'src/app/services/sort.service';

@Component({
  selector: 'app-mens-clothing',
  templateUrl: './mens-clothing.component.html',
  styleUrls: ['./mens-clothing.component.css']
})
export class MensClothingComponent {

  _product_data: any
  sortedProducts: any[]
  processDataSort: any
  constructor(private apiServe: ApiService) { }

  ngOnInit(): void {
    this.processDataSort = this.apiServe.getSingleCategory("men's clothing").subscribe(
      (data) => {
        this._product_data = JSON.stringify(data);
        this.sortedProducts = JSON.parse(this._product_data);
        this.sortedProducts.slice()
      }
    )


  }






}