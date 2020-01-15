import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

/**
 *  import files
 * add them to the routes array in the form of
 * { path: 'name of the route', component: name of the component }
 * */

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
