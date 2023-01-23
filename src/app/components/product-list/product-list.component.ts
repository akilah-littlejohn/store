import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import {Sort} from '@angular/material/sort';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],


})

export class ProductListComponent implements OnInit {

  products: any
  categories: any;
  filterProducts: boolean;
  sortedProducts:any[]
  categoryTitle: string;

  constructor(private apiService: ApiService, private router: Router) { }
  ngOnInit() {
    this.apiService.getProducts().subscribe(
      (data) => {
        this.products = data;
        this.sortedProducts = this.products.slice();
        }

    )
    this.apiService.getAllcatergories().subscribe(
      data => {
        this.categories = data
        console.log(data)
      }
    )


  }
  goToProductDetails(id: number) {
    this.router.navigate(['/product-details', id]);
  }

  goToCategory(category: string) {
    this.filterProducts = true;
    this.apiService.getSingleCategory(category)

  }

  displayProductTitle(value: string) {
    this.categoryTitle = value;

  }

  compareOrder(a: number | string, b: number | string, highPrice: boolean) {
    return (a < b ? -1 : 1) * (highPrice ? 1 : -1);
  }
 
  sortData(sort:Sort){
    const data = this.products.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedProducts= data;
      return;
    }
    this.sortedProducts = data.sort((a:any, b:any) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'price':
          return this.compareOrder(a.name, b.name, isAsc);
        case 'calories':
          return this.compareOrder(a.calories, b.calories, isAsc);
        case 'fat':
        default:
          return 0;
      }
    });
  }
}

  

