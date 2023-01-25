import {
  Component, ViewChild, OnInit, Input} from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { ApiService } from 'src/app/services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @Input() sortedProducts:any;

  constructor( private apiService: ApiService) {}
  ngOnInit(): void {}

  compareOrder(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  sortData(sort: Sort) {
    const data = this.sortedProducts.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedProducts = data;
      return;
    }
    this.sortedProducts = data.sort((a: any, b: any) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'title':
          return this.compareOrder(a.title, b.title, isAsc);
        case 'price':
          return this.compareOrder(a.price, b.price, isAsc);

        default:
          return 0;
      }
    });
  }

  sortByPrice() {

    const sortState: Sort = { active: 'price', direction: 'asc' };
    this.sort.active = sortState.active;
    this.sort.direction = sortState.direction;
    this.sort.sortChange.emit(sortState);
  }

  sortByPriceLow() {

    const sortState: Sort = { active: 'price', direction: 'desc' };
    this.sort.active = sortState.active;
    this.sort.direction = sortState.direction;
    this.sort.sortChange.emit(sortState);
  }

  deleteById(id: any) {
    this.apiService.deleteProductById(id).subscribe(
      data => {


        const index = this.sortedProducts.findIndex((p: { id: any; }) => p.id === id);
        this.sortedProducts.splice(index, 1);
      });

  }
}