import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import Swal from "sweetalert2";

@Component({
  selector: "app-allproducts",
  templateUrl: "./allproducts.component.html",
  styleUrls: ["./allproducts.component.scss"]
})
export class AllproductsComponent implements OnInit {
  allProducts: any = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    return this.http.get("http://localhost:8080/api/allproducts").subscribe(
      response => {
        console.log(response);
        // alert("console just logged all products");
        this.allProducts = response;
        console.log(this.allProducts);
      },
      error => {
        console.log("");
      }
    );
  }

  delete(id: string) {
    this.http
      .delete(`http://localhost:8080/api/delete/product/${id}`)
      .subscribe(data => {
        if (data["success"]) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Logged In successfully",
            showConfirmButton: false,
            timer: 1500
          });
          this.ngOnInit();
        }
      });
  }
}
