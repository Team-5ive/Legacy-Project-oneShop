import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HttpService } from "./../http.service";
import { VariablesService } from "../variables.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  token: string;
  constructor(
    private router: Router,
    private _http: HttpService,
    private variable: VariablesService
  ) {}
  logout() {
    localStorage.clear();
    this.token = "";
  }
  // getIt(t: string) {
  //   this.token = t;
  //   console.log(this.token);
  // }
  ngOnInit() {
    localStorage.clear();
    // setTimeout(() => {
    this.token = this.variable.Token;
    // console.log(this.token);
    // }, 1000);
  }
  invoked(t: string) {
    this.token = t;
  }
}
