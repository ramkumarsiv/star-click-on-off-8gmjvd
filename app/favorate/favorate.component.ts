import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-favorate',
  templateUrl: './favorate.component.html',
  styleUrls: ['./favorate.component.css']
})
export class FavorateComponent implements OnInit {
   @Input() isFavorate: boolean = false;
  constructor() { }

  ngOnInit() {
  }
 
  onClick(){
    this.isFavorate = !this.isFavorate;
  }

}