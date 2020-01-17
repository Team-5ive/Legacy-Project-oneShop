import { Component, OnInit } from '@angular/core';
import { VariablesService } from "../../variables.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private variable: VariablesService) { }

  ngOnInit() {
    // console.log(localStorage.cart)
  }

}
