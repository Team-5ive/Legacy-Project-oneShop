import { Component, OnInit } from "@angular/core";
import { HttpService } from "../../http.service";
// import * as $ from "jquery";
@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"]
})
export class CartComponent implements OnInit {
  constructor(private _http: HttpService) {}

  ngOnInit() {
    // $(document).ready(function() {
    //   alert("I am Called From jQuery");
    // });
  }
}
