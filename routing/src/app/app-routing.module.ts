import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FollowerComponent } from './follower/follower.component';
import { HomeComponent } from './home/home.component';
import { MyFollowerComponent } from './my-follower/my-follower.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { QueryParameterComponent } from './query-parameter/query-parameter.component';


const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"Page1/:sum",
    component:Page1Component
  },
  {
    path:"Page2/:id/:myName",
    component:Page2Component
  },
  {
    path:"Page3/:myNum",
    component:Page3Component
  },
  {
    path:"Follower",
    component:FollowerComponent
  },
  {
    path:"MyFollower",
    component:MyFollowerComponent
  },
  {
    path:"QueryParameter",
    component:QueryParameterComponent
  },
  {
    path:"**",
    component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
