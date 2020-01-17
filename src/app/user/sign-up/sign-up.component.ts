import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import Swal from 'sweetalert2'
import { Router } from "@angular/router"
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {
  form: FormGroup;

  constructor(public user: FormBuilder, private http: HttpClient, private router: Router) {
    this.form = this.user.group({
      name: [''],
      email: [''],
      confirmedPassword: [''],
      password: ['']
    })
  }

  ngOnInit() { }



  submitForm() {
    var obj = {
      name: this.form.get('name').value,
      email: this.form.get('email').value,
      password: this.form.get('password').value,
      confirmedPassword: this.form.get('confirmedPassword').value,

    }

    return this.http.post('http://localhost:8080/api/user/register', obj).subscribe(
      (response) => {
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Signup successfully',
          showConfirmButton: false,
          timer: 1500
        })
        localStorage.setItem("token", ` ${response["token"]}`)
        this.router.navigate([''])
        console.log(response)
      },
      (error) => {
        Swal.fire({
          position: 'top',
          icon: 'error',
          title: 'Signup failed',
          showConfirmButton: false,
          timer: 1500
        })
        console.log(error)
      }
    )
  }

}