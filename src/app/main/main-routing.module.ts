import {Component, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import {EposComponent} from "../Shared/components/epos/epos.component";
import {OperComponent} from "../Shared/components/oper/oper.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'oper',
        component: OperComponent
      },
      {
        path: 'epos',
        component: EposComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
