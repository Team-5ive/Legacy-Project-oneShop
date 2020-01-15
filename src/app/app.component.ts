import { Component, OnInit } from "@angular/core";
import { HttpService } from "./http.service";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "OneShop";
  // to submit a form you need to import form group
  // make the form group name in the form the same as the variable here
  // see the schema below
  // there is a better way but it's advanced
  public data: object;
  signUp = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl(""),
    confirmPassword: new FormControl("")
  });

  constructor(private _http: HttpService) {}
  // on submit it will send the data from the app component to the register function in the
  // http file go to app.module
  onSubmit() {
    this.data = this.signUp.value;
    this._http.register(this.data);
  }

  ngOnInit() {
    this._http.getUsers().subscribe(data => console.log(data));
  }
}
