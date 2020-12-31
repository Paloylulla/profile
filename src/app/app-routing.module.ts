import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "pageOne",
    pathMatch: "full",
  },
  {
    path: "homepage",
    loadChildren: () =>
      import("./home-page/home-page.module").then((m) => m.HomePageModule),
  },
  {
    path: "pageOne",
    loadChildren: () =>
      import("./page-one/page-one.module").then((m) => m.PageOneModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
