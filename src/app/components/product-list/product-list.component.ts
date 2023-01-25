import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product-list',
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],


})

export class ProductListComponent implements OnInit {
  _product_data: any
  sortedProducts: any[]
  processDataSort: any
  categories: any;
  categoryTitle: string;
  filterProducts: boolean = false;


  constructor(private apiService: ApiService, private router: Router, private location: Location) { }
  ngOnInit() {
    this.categories = this.apiService.getAllcatergories();

    this.apiService.getProducts().subscribe(
      (data) => {
        this._product_data = JSON.stringify(data);
        this.sortedProducts = JSON.parse(this._product_data);
        this.sortedProducts.slice()
      }
    )

    this.displayCategoies()
  }

  goToProductDetails(id: number) {
    this.router.navigate(['/product-details', id]);
  }
  displayCategoies() {
    if (this.location.path() === '/products') {
      this.filterProducts = false;
    } else {
      this.filterProducts = true
    }
  }
  goToCategory(category: string) {
      this.filterProducts = true
    this.displayProductTitle(category)
    this.apiService.getSingleCategory(category)

  }

  displayProductTitle(value: string) {

    const urlPaths = {
      electronics: '/products/electronics',
      jewelery: '/products/jewelery',
      ["men's clothing"]: '/products/mensclothing',
      ["women's clothing"]: '/products/womensclothing'
    };


    this.categoryTitle = `- ${value}`;
    switch (value) {
      case 'electronics':
      case 'jewelery':
      case "men's clothing":
      case "women's clothing":
        this.router.navigateByUrl(urlPaths[value]);
        break;
      default:

        this.router.navigateByUrl('/products');

    }

  }
}




