import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { VariablesService } from './../../variables.service'
import * as moment from 'moment';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  username: string = localStorage.username
  now = moment().format('LLLL');
  form: FormGroup;
  constructor(public checkout: FormBuilder, private http: HttpClient, private variable: VariablesService) {

    this.form = this.checkout.group({
      firstName: [""],
      phone: [""],
      adress: [""],
      adress2: [""],
      country: [""],
      city: [""],
      zip: [""],
      creditCard: [""],
      expiration: [""],
      cvv: [""],
    })
  }


  submitForm() {

    alert(this.form.get("firstName").value)

    var delivery_info = {
      street1: this.form.get("adress").value,
      street2: this.form.get("adress2").value,

      phone_number: this.form.get("phone").value,
      country: this.form.get("country").value,
      zip: this.form.get("zip").value,
      city: this.form.get("city").value


    }


    var card_info = {
      expiration: this.form.get("expiration").value,
      cvv: this.form.get("cvv").value,
      card_number: this.form.get("creditCard").value
    }

    var obj = {

      card_info,
      delivery_info,
      payment_method: this.form.get("creditCard").value,
      products: [],
      total_order_price: 0,
      status: "Pending",
      _id: "5e202d3eca34d442d07af940",
      userId: "5e1dd9ea6a5f7320c0008d1d"
    };
    return this.http
      .post("http://localhost:8080/api/add/orders", obj)
      .subscribe(response => {
        console.log("done")
      })
  }
}
