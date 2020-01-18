import { Component, OnInit } from "@angular/core";
import { VariablesService } from "./../../variables.service";

@Component({
  selector: "app-recipt",
  templateUrl: "./recipt.component.html",
  styleUrls: ["./recipt.component.scss"]
})
export class ReciptComponent implements OnInit {
  obj;
  constructor(private variable: VariablesService) {}

  ngOnInit() {
    this.obj = JSON.parse(this.variable.checkoutInfo);
    console.log(this.obj);
  }
}
