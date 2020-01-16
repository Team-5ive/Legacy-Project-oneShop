import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  form: FormGroup

  constructor(public inquery: FormBuilder, private http: HttpClient) {
    this.form = this.inquery.group({
      ProductName: [""],
      ProductPrice: [""],
      ProductDescription: [""],
      ProductCatagory: [""],
      ProductBrand: [""],
      ProductImage: [""],
      ProductSize: [""],
      ProductTag: [""],
      ProductColor: [""]
    })
  }

  ngOnInit() {
  }

  // alert(this.form.get('ProductName').value + this.form.get('ProductPrice').value + this.form.get('ProductDescription').value + this.form.get('ProductCatagory').value + this.form.get('ProductBrand').value)

  submitForm() {
    var obj = {
      ProductName: this.form.get('ProductName').value,
      ProductPrice: this.form.get('ProductPrice').value,
      ProductDescription: this.form.get('ProductDescription').value,
      ProductCatagory: this.form.get('ProductCatagory').value,
      ProductBrand: this.form.get('ProductBrand').value,
      ProductImage: this.form.get('ProductImage').value,
      ProductSize: this.form.get('ProductSize').value,
      ProductTag: this.form.get('ProductTag').value,
      ProductColor: this.form.get('ProductColor').value,
    }

    for (var key in obj) {
      if (obj[key] === "") {
        alert("PLEASE FILL ALL FIELDS")
        return
      }
    }
    // return this.http.post('http://localhost:8080/api/add/inquiry', obj).subscribe(
    //   (response) => console.log(response),
    //   (error) => console.log(error)
    // )
    console.log(obj)
  }

}
