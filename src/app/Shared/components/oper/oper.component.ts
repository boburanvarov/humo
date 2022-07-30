import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../services/api.service";
import {SwalComponent} from "@sweetalert2/ngx-sweetalert2";

@Component({
  selector: 'app-oper',
  templateUrl: './oper.component.html',
  styleUrls: ['./oper.component.scss']
})
export class OperComponent implements OnInit {

  @ViewChild('saveSwal')
  public readonly saveSwal!: SwalComponent;

  @ViewChild('warnSwal')
  public readonly warnSwal!: SwalComponent;

  eposForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiServices: ApiService) { }

  ngOnInit(): void {
    this.eposForm = this.fb.group({
      eposId: ['',  Validators.required],
      termType: ['', Validators.required],
      oper: ['', Validators.required],
      cardBranch: ['', Validators.required],
      termBranch: ['', Validators.required],
      trExpt: [''],
      trType: [''],
      mcc: ['', Validators.required],
      komis: ['', Validators.required],
      terminal: ['', Validators.required],
    });
  }


  saveSwalFunc() { }


  warnSwalFunc() { }


  submitForm(): void {
    if (this.eposForm.valid) {

      const eposValue = this.eposForm.value
      const body = {

        id: eposValue.eposId,
        termType: eposValue.termType,
        oper: eposValue.oper,
        cardBranch: eposValue.cardBranch,
        termBranch: eposValue.termBranch,
        trTypeB: eposValue.trType,
        trTypeExpt: eposValue.trExpt,
        mcc: eposValue.mcc,
        komis: eposValue.komis,
        terminal: eposValue.terminal
      }
      this.apiServices.operType(body).subscribe(res=>{
        if(res){
          this.saveSwal.fire();
          this.eposForm.reset()
        }else{
          this.warnSwal.fire();
        }
      },
        (error) => {

          if (error.status === 404 || error.status === 500) {
            this.warnSwal.fire();
          }else{
            this.warnSwal.fire();
          }
        })
    } else {
      Object.values(this.eposForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

}
