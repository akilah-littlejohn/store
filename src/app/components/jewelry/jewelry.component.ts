import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-jewelry',
  templateUrl: './jewelry.component.html',
  styleUrls: ['./jewelry.component.css']
})
export class JewelryComponent {
  _product_data: any
  sortedProducts: any[]
  processDataSort: any
  constructor(private apiServe: ApiService) { }

  ngOnInit(): void {
    this.processDataSort = this.apiServe.getSingleCategory('jewelery').subscribe(
      (data) => {
        this._product_data = JSON.stringify(data);
        this.sortedProducts = JSON.parse(this._product_data);
        this.sortedProducts.slice()
      }
    )


  }

}
