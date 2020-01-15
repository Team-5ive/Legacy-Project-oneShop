import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MenComponent } from "./dashboard/men/men.component";
import { WomenComponent } from "./dashboard/women/women.component";
/**
 *  import files
 * add them to the routes array in the form of
 * { path: 'name of the route', component: name of the component }
 * */

const routes: Routes = [
  { path: 'store/women', component: WomenComponent  },
  { path: 'store/men', component: MenComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
// add here your component route  so you can add them in app.moudel (for best practice) 
export const routingComponents = [MenComponent,WomenComponent]
