import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    return this.http.get('http://localhost:8080/api/orders').subscribe(
      (response: any[]) => {
        var results = []
        for (var i = 0; i < response.length; i++) {
          results.push([{ "total_order_price": response[i]["total_order_price"] }, { "payment_method": response[i]["payment_method"] }, { "status": response[i]["status"] }, { "title": response[i]["products"][0]["product"]["title"] }])
        }
        console.log(results)
      })
  }

}
