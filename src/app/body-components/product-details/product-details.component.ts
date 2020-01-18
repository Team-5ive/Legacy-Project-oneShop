import { Component, OnInit } from "@angular/core";
import { HttpService } from "../../http.service";
import { VariablesService } from "../../variables.service";

import Swal from 'sweetalert2'


@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"]
})
export class ProductDetailsComponent implements OnInit {
  product = {};
  Id: String = "";

  constructor(private _http: HttpService, private variable: VariablesService) { }

  ngOnInit() {
    this.Id = this.variable.Id;
    this._http.getProducts(this.Id).subscribe(data => {
      this.product = data;
    });
  }

  addToCart() {

    this.variable.addItem(this.product)

    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'success',
      title: 'Adding To Cart'
    })


  }
}
