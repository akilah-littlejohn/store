import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product-list-detail',
  templateUrl: './product-list-detail.component.html',
  styleUrls: ['./product-list-detail.component.css']
})
export class ProductListDetailComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) { }
  product_id: any;
  product_data:any;

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.product_id = id;

    this.product_data = this.apiService.getProductById(this.product_id).subscribe(
      data => this.product_data = data

      
    )
   


  }
}