import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-statistics",
  templateUrl: "./statistics.component.html",
  styleUrls: ["./statistics.component.scss"]
})
export class StatisticsComponent implements OnInit {
  users;
  userLogs = [];
  j: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get("http://localhost:8080/api/users").subscribe(data => {
      this.users = data;
      this.getOrders();
    });
  }

  getOrders() {
    for (var i = 0; i < this.users.length; i++) {
      this.j = i;
      console.log(this.users);
      this.http
        .get(`http://localhost:8080/api/orders/${this.users[this.j]._id}`)
        .subscribe(results => {
          console.log(this.j);
          // console.log(this.users[this.j]);
          // console.log(results);
          this.userLogs.push({
            username: this.users[this.j]["name"],
            orders: results
          });
          console.log(this.userLogs);
        });
    }
    this.userLogs = this.userLogs.sort(
      (a, b) => b["orders"].length - a["orders"].length
    );
  }
}
