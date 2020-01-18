import { Component, OnInit } from "@angular/core";
import { VariablesService } from "../../variables.service";

@Component({
  selector: "app-side-bar",
  templateUrl: "./side-bar.component.html",
  styleUrls: ["./side-bar.component.scss"]
})
export class SideBarComponent implements OnInit {
  searchText: string;
  course: any;
  products;
  constructor(private variable: VariablesService) {}

  ngOnInit() {
    this.products = this.variable.products;
  }
}
