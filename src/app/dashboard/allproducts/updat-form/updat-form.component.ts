import { Component, OnInit } from "@angular/core";
import { VariablesService } from "./../../../variables.service";

@Component({
  selector: "app-updat-form",
  templateUrl: "./updat-form.component.html",
  styleUrls: ["./updat-form.component.scss"]
})
export class UpdatFormComponent implements OnInit {
  constructor(private variable: VariablesService) {}

  ngOnInit() {
    this.variable.getProductId();
  }
}
