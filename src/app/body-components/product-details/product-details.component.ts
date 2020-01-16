import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../http.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

   product = {}

  constructor(private _http:HttpService) { }

  ngOnInit() {

    this._http.getProducts().subscribe(data => {this.product = data
    return this.product})

  }
  
  

}
