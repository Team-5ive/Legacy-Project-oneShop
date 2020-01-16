import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "../app/home/home.component";
import { LoginComponent } from "../app/user/login/login.component";
import { CategoriesComponent } from "./body-components/categories/categories.component";

import { CartComponent } from "./user/cart/cart.component";
import { ProductListComponent } from "./body-components/product-list/product-list.component";
import { ProductDetailsComponent } from "./body-components/product-details/product-details.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "cart", component: CartComponent },
  { path: "store/men", component: CategoriesComponent },
  { path: "store/women", component: CategoriesComponent },
  { path: "cart", component: CartComponent },
  //routes for the product list
  {
    path: "store/men",
    component: ProductListComponent,
    children: [
      { path: "tops", component: ProductListComponent },
      { path: "shirts", component: ProductListComponent },
      { path: "jeans", component: ProductListComponent },
      { path: "jackets", component: ProductListComponent },
      { path: "shoes", component: ProductListComponent },
      { path: "t-shirts", component: ProductListComponent }
    ]
  },
  {
    path: "store/women",
    component: ProductListComponent,
    children: [
      { path: "jackets", component: ProductListComponent },
      { path: "outerwear", component: ProductListComponent },
      { path: "jeans", component: ProductListComponent }
    ]
  },

  //Routes for the product details
  { path: "store/men/tops/productDetails", component: ProductDetailsComponent },
  {
    path: "store/men/shirts/productDetails",
    component: ProductDetailsComponent
  },
  {
    path: "store/men/jeans/productDetails",
    component: ProductDetailsComponent
  },
  {
    path: "store/men/jackets/productDetails",
    component: ProductDetailsComponent
  },
  {
    path: "store/men/shoes/productDetails",
    component: ProductDetailsComponent
  },
  {
    path: "store/men/t-shirts/productDetails",
    component: ProductDetailsComponent
  },
  {
    path: "store/women/jackets/productDetails",
    component: ProductDetailsComponent
  },
  {
    path: "store/women/outerwear/productDetails",
    component: ProductDetailsComponent
  },
  {
    path: "store/women/jeans/productDetails",
    component: ProductDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
// add here your component route  so you can add them in app.moudel (for best practice)
export const routingComponents = [
  HomeComponent,
  CategoriesComponent,
  CartComponent
];
