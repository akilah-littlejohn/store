import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  store_url: string =`https://fakestoreapi.com/`;
  products:string = `${'products'}`
  categories:string =`${'categories'}`

  constructor(private http: HttpClient) { }
  getProducts() {
    return this.http.get(`${this.store_url}${this.products}`)    
}

getAllcatergories(){
  return this.http.get(`${this.store_url}${this.products}/${this.categories}`)

}

getSingleCategory(category:string){
  return this.http.get(`${this.store_url}${this.products}/category/${category}/`)
}

getProductById(productId:string){
  return this.http.get(`${this.store_url}${this.products}/${productId}`)
  
}
}

