import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from '../app/home/home.component';
import { LoginComponent } from '../app/user/login/login.component';
import { CartComponent } from '../app/user/cart/cart.component';
import { MenComponent } from '../app/dashboard/men/men.component';
import { WomenComponent } from '../app/dashboard/women/women.component';


/**
 *  import files
 * add them to the routes array in the form of
 * { path: 'name of the route', component: name of the component }
 * */

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent },
  { path: 'men', component: MenComponent },
  { path: 'women', component: WomenComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
