import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../http.service"
import { VariablesService } from '../../variables.service'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private _http: HttpService, private variable: VariablesService) { }

  men = {}

  ngOnInit() {

    console.log(this.variable.getItems())


    ///////
  }





}
