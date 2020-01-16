import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.scss']
})
export class AllproductsComponent implements OnInit {
  constructor(private http: HttpClient) { }

  ngOnInit() {
    return this.http.get('http://localhost:8080/api/allproducts').subscribe(
      (response) => {
        console.log(response)
        alert("console just logged all products")
      },
      (error) => {
        console.log("")
      }
    )
  }




}
