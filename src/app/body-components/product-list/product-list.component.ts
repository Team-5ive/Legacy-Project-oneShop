import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}
  public href: string = "";
  public array;
  public lists;
  ngOnInit() {
    this.array = this.router.url.split("/");
    this.array.splice(0, 2);
    this.href = this.array;

    this.http
      .get(
        `http://localhost:8080/api/customer_products/${this.href[0]}/${this.href[1]}`
      )
      .subscribe(data => {
        this.lists = data;
        console.log(this.lists);
      });
  }
}
