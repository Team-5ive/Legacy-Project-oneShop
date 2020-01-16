import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "../app/home/home.component";
import { LoginComponent } from "../app/user/login/login.component";
import { CartComponent } from "../app/user/cart/cart.component";
import { CategoriesComponent } from "./body-components/categories/categories.component";

import { CartComponent } from "./user/cart/cart.component";
import { ProductListComponent } from "./body-components/product-list/product-list.component";

/**
 *  import files
 * add them to the routes array in the form of
 * { path: 'name of the route', component: name of the component }
 * */

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "cart", component: CartComponent },
  { path: "store/men", component: CategoriesComponent },
  { path: "store/women", component: CategoriesComponent },
  { path: 'cart', component: CartComponent }
  { path: "store/men/tops", component: ProductListComponent },
  { path: "store/men/shirts", component: ProductListComponent },
  { path: "store/men/jeans", component: ProductListComponent },
  { path: "store/men/jackets", component: ProductListComponent },
  { path: "store/men/shoes", component: ProductListComponent },
  { path: "store/men/t-shirts", component: ProductListComponent },
  { path: "store/women/jackets", component: ProductListComponent },
  { path: "store/women/outerwear", component: ProductListComponent },
  { path: "store/women/jeans", component: ProductListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
// add here your component route  so you can add them in app.moudel (for best practice) 
export const routingComponents = [HomeComponent,CategoriesComponent,CartComponent]
