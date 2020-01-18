import { Component, OnInit, ContentChildren } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FormBuilder, FormGroup } from "@angular/forms";
import Swal from 'sweetalert2'
import { Router } from "@angular/router";
import { HttpService } from "./../../http.service";

// import {HeaderComponent} from '../../header/header.component'

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  // @ContentChildren(HeaderComponent)
  form: FormGroup;
  constructor(
    public user: FormBuilder,
    private http: HttpClient,
    private router: Router,
    public _http: HttpService
  ) {
    this.form = this.user.group({
      email: [""],
      password: [""]
    });
  }
  token: string = "";
  ngOnInit() {
    console.log(this.token + "sas", this._http.Token);
    
  }

  submitForm() {
    var obj = {
      email: this.form.get("email").value,
      password: this.form.get("password").value
    };

    return this.http
      .post("http://localhost:8080/api/user/login", obj)
      .subscribe(response => {
        if (response) {
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Logged In successfully',
            showConfirmButton: false,
            timer: 1500
          })
          localStorage.setItem("token", ` ${response["token"]}`);
          console.log(response)
          if (response["userType"] != "Customer") {
            this.router.navigate(["dashboard"]);
            this.setToken()
          } else {
            this.router.navigate([""]);
          }

        } else {
          Swal.fire({
            position: 'top',
            icon: 'error',
            title: 'Email or Password is Incorrect',
            showConfirmButton: false,
            timer: 1500
          })
          this.router.navigate(["login"]);



        }
      });
  }

  setToken() {
    setTimeout(() => {
      this.token = localStorage.getItem("token");
      this._http.Token = this.token;
    }, 500);
  }
}
