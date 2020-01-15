import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  // Email: string = '';
  // Text: string = '';

  form: FormGroup


  constructor(public inquery: FormBuilder, private http: HttpClient) {
    this.form = this.inquery.group({
      email: [""],
      message: [""]
    })
  }

  ngOnInit() {
  }
  submitForm() {
    // console.log(form.value)
    // this.Email = form.value.Email
    // this.Text = form.value.Text
    // console.log(this.Email + this.Text)

    // var obj = {
    //   email: this.Email,
    //   message: this.Text
    // }
    // console.log(obj.email)
    //https://postman-echo.com/post
    var obj = {
      email: this.form.get('email').value,
      message: this.form.get('message').value
    }


    return this.http.post('http://localhost:8080/api/add/inquiry', obj).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }

}
