import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.scss']
})
export class WomenComponent implements OnInit {



  constructor(private http: HttpClient) { }

  ngOnInit() {
    return this.http.get('http://localhost:8080/api/allproducts').subscribe(
      (response: any[]) => {
        var results = []
        for (var i = 0; i < response.length; i++) {
          if (response[i]["category"] === 'Women') {
            results.push(response[i])
          }
        }
        console.log(results)
        alert("console just logged all women products")
      },
      (error) => {
        console.log("")
      }
    )
  }

}
