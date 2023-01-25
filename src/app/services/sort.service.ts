/*import { Injectable } from '@angular/core'
import { map } from 'rxjs/operators';
import { MatSort, Sort } from '@angular/material/sort';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SortService {

sort:MatSort
  constructor() { }

getTableData(value:Observable<any>){
       value.pipe(
    map(data => {
      this._product_data = JSON.stringify(data);
      return JSON.parse(this._product_data);
    }),
  )

}
sortData(event:any) {
  if (event.active === 'price') {
      this.sortedProducts$ = this.sortedProducts$.pipe(
          map(data => {
              return data.sort((a:any, b:any) => {
                  return (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0);
              });
          }),
      );
  } else {
      this.sortedProducts$ = this.sortedProducts$.pipe(
          map(data => {
              return data
          }),
      );
  }
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
}/*/
