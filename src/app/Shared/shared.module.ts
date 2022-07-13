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

@NgModule({
  declarations: [
    MenuComponent,
    OperComponent,
    EposComponent,
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
    SweetAlert2Module

  ],
  exports: [
    MenuComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SharedModule {
}
