import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.scss']
})
export class MenComponent implements OnInit {

   men = {
    gender: "Men",
    tags: [
      {
        tagName: "Tops",
        tagImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5A1uhlHyOJWv5L4aDYe1mHOVnMfTQl8d7GbBlcJ6XasEgrRP&s",
        tagLink: "/store/men/tops"
      },
      {
        tagName: "Shirts",
        tagImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ62UD_jA5XdXsOz5e1vzPcavC8xr-UfNUM-ssFk7_5GIJA5uLC&s",
        tagLink: "/store/men/shirts"
      },
      {
        tagName: "Jeans",
        tagImage: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/1.jpg",
        tagLink: "/store/men/jeans"
      },
      {
        tagName: "Jackets",
        tagImage: "https://ae01.alicdn.com/kf/HTB1ta5XLpXXXXXcXXXXq6xXFXXXN/2019-Brand-New-Jacket-Men-Top-Design-Casual-Outwear-Spring-Autumn-Slim-Fit-Solid-Mens-Jackets.jpg",
        tagLink: "/store/men/jackets"
      },
      {
        tagName: "Shoes",
        tagImage: "https://www.dhresource.com/600x600/f2/albu/g9/M00/37/17/rBVaWF3crHiAAIQcAATYeWvbH9E318.jpg",
        tagLink: "/store/men/shoes"
      },
      {
        tagName: "T-Shirts",
        tagImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5A1uhlHyOJWv5L4aDYe1mHOVnMfTQl8d7GbBlcJ6XasEgrRP&s",
        tagLink: "/store/men/t-shirts"
      }
    ]
  }

  constructor() { }

  ngOnInit() {

    console.log(this.men)
  }

}
