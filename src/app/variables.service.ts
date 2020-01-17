import { Injectable } from "@angular/core";
// import { HeaderComponent } from "./header/header.component";

@Injectable({
  providedIn: "root"
})
export class VariablesService {
  Token: string = "";
  Id: String = "";

  constructor() // private header: HeaderComponent
  {}
  getVariables(id) {
    this.Id = id;
  }
  getToken(token: string) {
    this.Token = token;
    // this.header.invoked(this.Token);
  }
}
