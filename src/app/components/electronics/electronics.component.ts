import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})


export class ElectronicsComponent implements OnInit {
  
  @Input()jewelryProducts:any;
  constructor(){}

ngOnInit(): void {
  
}

}
