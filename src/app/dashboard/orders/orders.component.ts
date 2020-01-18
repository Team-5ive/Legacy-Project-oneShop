import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.scss"]
})
export class OrdersComponent implements OnInit {
  order = [];
  userId = [];
  usernames;
  userInfo = [];
  show: boolean = false;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get("http://localhost:8080/api/orders")
      .subscribe((response: any[]) => {
        this.order = response;
        console.log(this.order);
      });
  }

  getUsername(id) {
    return this.http
      .get(`http://localhost:8080/api/getUserById/${id}`)
      .subscribe((response: any[]) => {
        // console.log(response["name"]);
        return response["name"];
      });
  }

  toggle() {
    !this.show;
  }
}
