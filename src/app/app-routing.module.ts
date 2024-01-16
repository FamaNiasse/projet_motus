import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterfacePageComponent } from './pages/interface-page/interface-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [

    {
      path:"",
      component: HomePageComponent
    },
    {
      path:"interface",
      component: InterfacePageComponent
    },
    // {
    //   path:"not-found",
    //   component: NotFoundComponent
    // },
    // whitecard pour la 404
    {
      path:"**",
      redirectTo: "not-found"
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
