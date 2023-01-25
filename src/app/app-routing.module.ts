import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductListDetailComponent } from './components/product-list-detail/product-list-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { JewelryComponent } from './components/jewelry/jewelry.component';
import { MensClothingComponent } from './components/mens-clothing/mens-clothing.component';
import { WomensClothingComponent } from './components/womens-clothing/womens-clothing.component';

const routes: Routes = [
  { path: 'products', component:ProductListComponent,
  children: [
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    { path: 'electronics', component: ElectronicsComponent},
    { path: 'jewelery', component: JewelryComponent},
    { path: 'mensclothing', component:MensClothingComponent},
    { path: 'womensclothing', component:WomensClothingComponent}
  ]
},
  {path:'product/:id', component:ProductListDetailComponent},
  { path: 'add-product', component: AddProductComponent},
  { path: '**', redirectTo: 'products' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }