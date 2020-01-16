import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class VariablesService {
  Id: String = "";
  constructor() {}
  getVariables(id) {
    this.Id = id;
    console.log(this.Id);
  }
}
