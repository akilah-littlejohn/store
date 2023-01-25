import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductListDetailComponent } from './components/product-list-detail/product-list-detail.component';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { JewelryComponent } from './components/jewelry/jewelry.component';
import { MensClothingComponent } from './components/mens-clothing/mens-clothing.component';
import { TableComponent } from './components/table/table.component';
import { WomensClothingComponent } from './components/womens-clothing/womens-clothing.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AddProductComponent,
    ProductListDetailComponent,
    ElectronicsComponent,
    JewelryComponent,
    MensClothingComponent,
    TableComponent,
    WomensClothingComponent,
    
    
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
