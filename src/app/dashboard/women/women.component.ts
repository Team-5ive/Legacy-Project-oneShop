import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.scss']
})
export class WomenComponent implements OnInit {


  women = {
    gender: "Women",
    tags: [
      {
        tagName: "Jackets",
        tagImage: "https://ae01.alicdn.com/kf/HTB1ta5XLpXXXXXcXXXXq6xXFXXXN/2019-Brand-New-Jacket-Men-Top-Design-Casual-Outwear-Spring-Autumn-Slim-Fit-Solid-Mens-Jackets.jpg",
        tagLink: "/store/women/jackets"
      },
      {
        tagName: "Outerwear",
        tagImage: "https://oldnavy.gap.com/webcontent/0016/963/918/cn16963918.jpg",
        tagLink: "/store/women/outerwear"
      },
      {
        tagName: "Jeans",
        tagImage: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/1.jpg",
        tagLink: "/store/women/jeans"
      }
    ]
  }

  constructor() { }

  ngOnInit() {

    console.log(this.women)
  }

}
