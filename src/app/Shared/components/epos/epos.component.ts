import {Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {FormBuilder, Validators} from "@angular/forms";
import {SwalComponent} from "@sweetalert2/ngx-sweetalert2";

@Component({
  selector: 'app-epos',
  templateUrl: './epos.component.html',
  styleUrls: ['./epos.component.scss']
})
export class EposComponent implements OnInit {

  @ViewChild('saveSwal')
  public readonly saveSwal!: SwalComponent;

  @ViewChild('warnSwal')
  public readonly warnSwal!: SwalComponent;

  eposList: any[] = [];
  eposData: any[] = [];
  editEposList: any;
  searchValue = '';

  eposForm = this.fb.group({
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

  constructor(
    private  apiServices: ApiService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getEpos();
  }

  saveSwalFunc() { }


  warnSwalFunc() { }

  search(event:any){
    const filter = event.value
    console.log()
    this.eposData = this.eposList.filter((item: any) => item.id.indexOf(filter) !== -1);
    console.log(this.eposData)
  }

  parseDate(item:any){
    this.eposForm.patchValue({
      eposId: item.id,
      termType: item.term_TYPE,
      oper: item.oper,
      cardBranch: item.card_BRANCH,
      termBranch: item.term_BRANCH,
      trExpt: item.tr_TYPE_EXPT,
      trType: item.tr_TYPE_B,
      mcc: item.mcc,
      komis: item.komis,
      terminal: item.terminal,
    })

  }

  startEdit(id: number): void {
   this.eposList[id].edit = true;

   this.editEposList = this.eposList[id]
   this.parseDate(this.eposList[id])

  }

  cancelEdit(id: number): void {
    this.eposList[id].edit = false;
  }

  saveEdit(id: number): void {
    console.log(id);
    console.log(this.editEposList, 'editlist')
    const eposEdit = this.eposForm.value;
    console.log(eposEdit)

    const body ={
      humoOperType: {
        id: this.editEposList.id,
        termType: this.editEposList.term_TYPE,
        oper: this.editEposList.oper,
        cardBranch: this.editEposList.card_BRANCH,
        termBranch: this.editEposList.term_BRANCH,
        trTypeB: this.editEposList.tr_TYPE_B,
        trTypeExpt: this.editEposList.tr_TYPE_EXPT,
        mcc: this.editEposList.mcc,
        komis: this.editEposList.komis,
        terminal: this.editEposList.terminal
      },
      humoOper: {
        id: eposEdit.eposId,
        termType: eposEdit.termType,
        oper: eposEdit.oper,
        cardBranch: eposEdit.cardBranch,
        termBranch: eposEdit.termBranch,
        trTypeB: eposEdit.trType,
        trTypeExpt: eposEdit.trExpt,
        mcc: eposEdit.mcc,
        komis: eposEdit.komis,
        terminal: eposEdit.terminal
      }
    }
    this.apiServices.editEpos(body).subscribe(res=>{
        if(res){
          this.getEpos();
          this.saveSwal.fire();
          this.eposList[id].edit = false;
        }else{
          this.warnSwal.fire();
        }
      },
      (error) => {
        console.log(error)
        if (error.status === 404 || error.status === 500) {
          this.warnSwal.fire();
        }else{
          this.warnSwal.fire();
        }
      })

  }

  deleteItem(data:any){
    console.log(data)

    const body ={
      card_BRANCH:  data.card_BRANCH,
      id:  data.id,
      komis:  data.komis,
      mcc: data.mcc,
      oper: data.oper,
      term_BRANCH: data.term_BRANCH,
      term_TYPE: data.term_TYPE,
      terminal: data.terminal,
      tr_TYPE_B: data.tr_TYPE_B,
      tr_TYPE_EXPT: data.tr_TYPE_EXPT
    }
    console.log(body)
    this.apiServices.deleteEpos(body).subscribe(res=>{
        if(res){
          this.getEpos();
          this.saveSwal.fire();
        }else{
          this.warnSwal.fire();
        }
      },
      (error) => {
        console.log(error)
        if (error.status === 404 || error.status === 500) {
          this.warnSwal.fire();
        }else{
          this.warnSwal.fire();
        }
      })

  }





  getEpos(){
    this.apiServices.allEpos().subscribe((res)=>{

      this.eposList =res;
      this.eposData = [...this.eposList];
      console.log(this.eposList)
      // this.eposList.forEach(item => {
      //   item.edit = false
      // });

    })
  }

}
