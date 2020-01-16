import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CategoriesComponent } from "./body-components/categories/categories.component";
import { CartComponent } from "./user/cart/cart.component";
import { ProductDetailsComponent } from "./body-components/product-details/product-details.component";/**
 *  import files
 * add them to the routes array in the form of
 * { path: 'name of the route', component: name of the component }
 * */

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "store/men", component: CategoriesComponent },
  { path: "store/women", component: CategoriesComponent },
  { path: 'cart', component: CartComponent },
  { path: 'productdetail', component: ProductDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
// add here your component route  so you can add them in app.moudel (for best practice) 
export const routingComponents = [HomeComponent,CategoriesComponent,CartComponent]
