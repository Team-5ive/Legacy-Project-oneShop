import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../http.service"
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private _http:HttpService) { }

    men = {}

  ngOnInit() {
//this one just for testin only 
    this._http.getMenProduct().subscribe(data => {this.men = data
      console.log(this.men)
      return this.men})
      
      ///////
  }

  
    
  

}
