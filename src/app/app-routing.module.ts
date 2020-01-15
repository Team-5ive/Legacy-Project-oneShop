import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from '../app/home/home.component';
import { LoginComponent } from '../app/user/login/login.component';
import { CartComponent } from '../app/user/cart/cart.component';
import { CategoriesComponent } from './body-components/categories/categories.component';


/**
 *  import files
 * add them to the routes array in the form of
 * { path: 'name of the route', component: name of the component }
 * */

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent },
  { path: 'store/men', component: CategoriesComponent },
  { path: 'store/women', component: CategoriesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
