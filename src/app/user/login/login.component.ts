import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from "@angular/forms";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup
  constructor(public user: FormBuilder, private http: HttpClient) {
    this.form = this.user.group({

      email: [''],
      password: ['']
    })
  }

  ngOnInit() {
  }

  submitForm() {



    var obj = {
      email: this.form.get('email').value,
      password: this.form.get('password').value,

    }

    return this.http.post('http://localhost:8080/api/user/login', obj).subscribe(
      (response) => {
        const { token } = response

        localStorage.setItem('token', token)
      },
      (error) => console.log(error)
    )

  }



}
