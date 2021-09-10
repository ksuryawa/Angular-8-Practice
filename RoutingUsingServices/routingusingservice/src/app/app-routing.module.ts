import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Page1Component} from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { PagnotfoundComponent } from './pagnotfound/pagnotfound.component';
import { QueryParameterComponent } from './query-parameter/query-parameter.component';


const routes: Routes = [
  {
    path:"",
    component: Page1Component
  },
  {
    path:'Page2/:id',
    component: Page2Component
  },
  {
    path:'QueryParameter',
    component: QueryParameterComponent
  },
  {
    path:"**",
    component:PagnotfoundComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
