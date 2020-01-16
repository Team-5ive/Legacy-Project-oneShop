import { Component, OnInit } from "@angular/core";
import { HttpService } from "../../http.service";
import { VariablesService } from "../../variables.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"]
})
export class ProductDetailsComponent implements OnInit {
  product = {};
  Id: String = "";

  constructor(private _http: HttpService, private variable: VariablesService) {}

  ngOnInit() {
    this.Id = this.variable.Id;
    this._http.getProducts(this.Id).subscribe(data => {
      this.product = data;
      console.log(this.product);
    });
  }
}
