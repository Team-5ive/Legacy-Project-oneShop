import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MenComponent } from "./dashboard/men/men.component";
import { WomenComponent } from "./dashboard/women/women.component";
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from "./body-components/categories/categories.component";
/**
 *  import files
 * add them to the routes array in the form of
 * { path: 'name of the route', component: name of the component }
 * */

const routes: Routes = [
  { path: '' , component: HomeComponent },
  { path: 'store/women', component: CategoriesComponent },
  { path: 'store/men', component: CategoriesComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
// add here your component route  so you can add them in app.moudel (for best practice) 
export const routingComponents = [MenComponent,WomenComponent,HomeComponent,CategoriesComponent]
