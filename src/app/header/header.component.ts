import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HttpService } from "./../http.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private _http: HttpService) { }
  logout() {
    localStorage.clear();
    this.token = "";
    this._http.Token = "";
  }

  token: string = "";

  ngOnInit() {
    var that = this;

    var inter = setInterval(function () {
      that.token = that._http.Token;
      if (that.token) {
        clearInterval(inter);
        that.ngOnInit();
      }
    }, 3000);
  }
}
