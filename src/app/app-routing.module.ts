import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "../app/home/home.component";
import { LoginComponent } from "../app/user/login/login.component";
import { CartComponent } from "../app/user/cart/cart.component";
import { CategoriesComponent } from "./body-components/categories/categories.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AllproductsComponent } from "./dashboard/allproducts/allproducts.component";
import { OrdersComponent } from "./dashboard/orders/orders.component";
import { MenComponent } from "./dashboard/men/men.component";
import { WomenComponent } from "./dashboard/women/women.component";
import { AddProductComponent } from "./dashboard/add-product/add-product.component";

import { SignUpComponent } from "./user/sign-up/sign-up.component"
import { ProductListComponent } from "./body-components/product-list/product-list.component";
import { ProductDetailsComponent } from "./body-components/product-details/product-details.component";

const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      { path: "allproducts", component: AllproductsComponent },
      { path: "men", component: MenComponent },
      { path: "women", component: WomenComponent },
      { path: "orders", component: OrdersComponent },
      { path: "", component: AddProductComponent }
    ]
  },






  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignUpComponent },
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
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// add here your component route  so you can add them in app.moudel (for best practice)
export const routingComponents = [
  HomeComponent,
  CategoriesComponent,
  CartComponent
];
