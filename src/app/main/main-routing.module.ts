import {Component, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import {EposComponent} from "../Shared/components/epos/epos.component";
import {OperComponent} from "../Shared/components/oper/oper.component";
import {ExptTransactionsComponent} from "../Shared/components/expt-transactions/expt-transactions.component";
import {BTransactionsComponent} from "../Shared/components/btransactions/btransactions.component";
import {ScanfileComponent} from "../Shared/components/scanfile/scanfile.component";

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
      {
        path: 'exptTransactions',
        component: ExptTransactionsComponent
      },
      {
        path: 'bTransactions',
        component: BTransactionsComponent
      },

      {
        path: 'scanFile',
        component: ScanfileComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
