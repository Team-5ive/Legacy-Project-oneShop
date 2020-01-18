import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { VariablesService } from "./../../variables.service";
import * as moment from "moment";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.scss"]
})
export class CheckoutComponent {
  username: string = localStorage.username;
  now = moment().format("LLLL");
  form: FormGroup;
  countries = [
    {
      country: "Tunisia",
      cities: ["Tunis", "Sfax", "Sousse", "Kairouan", "Gabès", "Bizerte"]
    },
    {
      country: "Libya",
      cities: ["Tripoli", "Benghazi", "Misrata", "Derna", "Tobruk", "Sirte"]
    },
    {
      country: "UK",
      cities: ["London", " Manchester", "Glasgow", "Leeds", "Liverpool"]
    },
    {
      country: "US",
      cities: [
        "Los Angeles",
        "Chicago",
        "Houston",
        "Phoenix",
        "New York",
        "Ohio"
      ]
    }
  ];
  productsInfo = [];
  // cities =
  // formControlName
  constructor(
    public checkout: FormBuilder,
    private http: HttpClient,
    private variable: VariablesService
  ) {
    this.form = this.checkout.group({
      phone: [""], //
      address: [""], //
      address2: [""], //
      country: [""], //
      city: [""], //
      zip: [""], //
      paymentMethod: [""], //
      expiration: [""], //
      cvv: [""], //
      card_number: [""]
    });
  }

  submitForm() {
    for (var i = 0; i < this.variable.items.length; i++) {
      this.productsInfo.push({
        product: this.variable.items[i],
        selected_size: "M",
        quantity: 1,
        total_product_price: this.variable.items[i].price
      });
    }
    var delivery_info = {
      street1: this.form.get("address").value,
      street2: this.form.get("address2").value,

      phone_number: this.form.get("phone").value,
      country: this.form.get("country").value,
      zip: this.form.get("zip").value,
      city: this.form.get("city").value
    };

    var card_info = {
      expiration: this.form.get("expiration").value,
      cvv: this.form.get("cvv").value,
      card_number: this.form.get("card_number").value
    };

    var obj = {
      card_info,
      delivery_info,
      payment_method: this.form.get("paymentMethod").value,
      products: this.productsInfo,
      total_order_price: this.variable.sum,
      userId: this.variable.userInfo["userId"],
      username: this.variable.userInfo["username"]
    };
    // console.log(obj);
    return this.http
      .post("http://localhost:8080/api/add/orders", obj)
      .subscribe(response => {
        console.log("done");
      });
  }
}
