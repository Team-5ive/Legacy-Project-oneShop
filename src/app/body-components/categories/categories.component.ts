import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"]
})
export class CategoriesComponent implements OnInit {
  categories: Object = {
    men: {
      gender: "Men",
      tags: [
        {
          tagName: "Tops",
          tagImage:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5A1uhlHyOJWv5L4aDYe1mHOVnMfTQl8d7GbBlcJ6XasEgrRP&s",
          tagLink: "/store/men/tops"
        },
        {
          tagName: "Shirts",
          tagImage:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ62UD_jA5XdXsOz5e1vzPcavC8xr-UfNUM-ssFk7_5GIJA5uLC&s",
          tagLink: "/store/men/shirts"
        },
        {
          tagName: "Jeans",
          tagImage:
            "https://oldnavy.gap.com/webcontent/0016/963/918/cn16963918.jpg",
          tagLink: "/store/men/jeans"
        },
        {
          tagName: "Jackets",
          tagImage:
            "https://ae01.alicdn.com/kf/HTB1ta5XLpXXXXXcXXXXq6xXFXXXN/2019-Brand-New-Jacket-Men-Top-Design-Casual-Outwear-Spring-Autumn-Slim-Fit-Solid-Mens-Jackets.jpg",
          tagLink: "/store/men/jackets"
        },
        {
          tagName: "Shoes",
          tagImage:
            "https://www.dhresource.com/600x600/f2/albu/g9/M00/37/17/rBVaWF3crHiAAIQcAATYeWvbH9E318.jpg",
          tagLink: "/store/men/shoes"
        },
        {
          tagName: "T-Shirts",
          tagImage:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5A1uhlHyOJWv5L4aDYe1mHOVnMfTQl8d7GbBlcJ6XasEgrRP&s",
          tagLink: "/store/men/t-shirts"
        }
      ]
    },
    women: {
      gender: "Women",
      tags: [
        {
          tagName: "Jackets",
          tagImage:
            "https://images-na.ssl-images-amazon.com/images/I/51lP12bg6PL._AC_UX679_.jpg",
          tagLink: "/store/women/jackets"
        },
        {
          tagName: "Outerwear",
          tagImage:
            "https://oldnavy.gap.com/webcontent/0016/963/918/cn16963918.jpg",
          tagLink: "/store/women/outerwear"
        },
        {
          tagName: "Jeans",
          tagImage:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/1.jpg",
          tagLink: "/store/women/jeans"
        },
        {
          tagName: "Shoes",
          tagImage:
            "https://cdn.shopify.com/s/files/1/0196/4962/6212/products/2-jpg-1555672356475_42e70c44-480a-4af9-8c81-0b44092343a1_800x.jpg?v=1572125261",
          tagLink: "/store/women/shoes"
        },
        {
          tagName: "T-Shirts",
          tagImage:
            "https://lautwear.com/wp-content/uploads/2017/10/Techno-T-shirt-For-Women-Laut-Wear-Techno-Clothing-066-830x1245.jpg",
          tagLink: "/store/women/t-shirts"
        },
        {
          tagName: "Tops",
          tagImage:
            "https://i.pinimg.com/originals/78/76/ed/7876eda53aca041697e20f5442e45a67.jpg",
          tagLink: "/store/women/tops"
        }
      ]
    }
  };

  constructor(private router: Router) {}
  public href: string = "";
  ngOnInit() {
    this.href = this.router.url;
  }
}
