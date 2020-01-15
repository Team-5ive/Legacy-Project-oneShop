import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { AppComponent } from './../../app.component'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {
  form: FormGroup;

  constructor(public user: FormBuilder, private http: HttpClient) {
    this.form = this.user.group({
      name: [''],
      email: [''],
      confirmedPassword: [''],
      password: ['']
    })
  }

  ngOnInit() { }

  

  submitForm() {

    var formData: any = new FormData();
    formData.append("name", this.form.get('name').value);
    formData.append("email", this.form.get('email').value);
    formData.append("password", this.form.get('password').value);
    formData.append("confirmedPassword", this.form.get('confirmedPassword').value);

    
    var obj = {
      name: formData.getAll('name')[0],
      email: formData.getAll('email')[0],
      password: formData.getAll('password')[0],
      confirmedPassword: formData.getAll('confirmedPassword')[0],

    }
    // console.log(obj.confirmePassword)
   return this.http.post('http://localhost:8080/api/user/register', obj).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }

}