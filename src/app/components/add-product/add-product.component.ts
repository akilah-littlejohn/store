import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  formFields = [
    "Title",
    "Price",
    "Description",
    "Category",
    "Image"
  ]
  constructor(private router: Router) { }
  add_products(form: NgForm) {
    if (form.valid) {
      this.router.navigate(['/products']);
    }
  }
}
