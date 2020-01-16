import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.scss']
})
export class MenComponent implements OnInit {



  constructor(private http: HttpClient) { }

  ngOnInit() {
    return this.http.get('http://localhost:8080/api/allproducts').subscribe(
      (response: any[]) => {
        var results = []
        for (var i = 0; i < response.length; i++) {
          if (response[i]["category"] === 'Men') {
            results.push(response[i])
          }
        }
        console.log(results)
        alert("console just logged all men products")
      },
      (error) => {
        console.log("")
      }
    )
  }

}
