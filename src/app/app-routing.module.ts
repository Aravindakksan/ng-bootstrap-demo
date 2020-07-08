import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AccordinComponent } from './accordin/accordin.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ModelComponent } from './model/model.component';
import { PopoverComponent } from './popover/popover.component';
import { TypeheadComponent } from './typehead/typehead.component';


const routes: Routes = [
  {
    path:"main",
    component: MainComponent
  },
  {
    path:"accordin",
    component: AccordinComponent
  },
  {
    path:"carousel",
    component: CarouselComponent
  },
  {
    path:"model",
    component: ModelComponent
  },
  {
    path:"popover",
    component: PopoverComponent
  },
  {
    path:"typehead",
    component: TypeheadComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
