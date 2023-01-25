import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-womens-clothing',
  templateUrl: './womens-clothing.component.html',
  styleUrls: ['./womens-clothing.component.css']
})
export class WomensClothingComponent implements OnInit{
  _product_data: any
  sortedProducts: any[]
  processDataSort: any

  constructor(private apiServe:ApiService){}
  ngOnInit(): void {
    this.processDataSort= this.apiServe.getSingleCategory("women's clothing").subscribe(
      (data) => {
        this._product_data = JSON.stringify(data);
        this.sortedProducts = JSON.parse(this._product_data);
        this.sortedProducts.slice()
      })
    }
}
