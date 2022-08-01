import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './components/menu/menu.component';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {OperComponent} from './components/oper/oper.component';
import {EposComponent} from './components/epos/epos.component';
import {RouterModule} from "@angular/router";
import {NzGridModule} from "ng-zorro-antd/grid";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzPopconfirmModule} from 'ng-zorro-antd/popconfirm';
import { ExptTransactionsComponent } from './components/expt-transactions/expt-transactions.component';
import { BTransactionsComponent } from './components/btransactions/btransactions.component';
import {NzModalModule} from "ng-zorro-antd/modal";
import { ScanfileComponent } from './components/scanfile/scanfile.component';
import {LoadingComponent} from "./components/loading/loading.component";
import {AutosizeModule} from "ngx-autosize";

@NgModule({
  declarations: [
    MenuComponent,
    OperComponent,
    EposComponent,
    ExptTransactionsComponent,
    BTransactionsComponent,
    ScanfileComponent,
    LoadingComponent,
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NzLayoutModule,
        NzIconModule,
        NzMenuModule,
        RouterModule,
        NzFormModule,
        NzInputModule,
        NzButtonModule,
        NzTableModule,
        NzPopconfirmModule,
        FormsModule,
        SweetAlert2Module,
        NzModalModule,
        AutosizeModule

    ],
  exports: [
    MenuComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SharedModule {
}
