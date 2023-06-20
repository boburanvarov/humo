import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Utils} from "../../Utils/utils";
import {FormBuilder} from "@angular/forms";
import {LoadingService} from "../../services/loading.service";

@Component({
  selector: 'app-expt-transactions',
  templateUrl: './expt-transactions.component.html',
  styleUrls: ['./expt-transactions.component.scss']
})
export class ExptTransactionsComponent implements OnInit {

  exptTransactionsList: any[]= []
  exptTransaction: any;
  isVisible = false;
  exptForm= this.fb.group({
    stat: [],
    err: [],
    file: [],
    id: [],
    term_ID: [],
    tranz_ACCT: [],
    tran_AMT2: [],
    tran_TYPE2: [],
    tran_DATE_TIME: [],
    empc_FILE_ID: [],
    tran_CCY: [],
    line_NUMBER: [],
    rec_DATE: [],
    post_DATE: [],
    client: [],
    accnt_AMT: [],
    terminal: [],
    merchant: [],
    abvr_NAME: [],
    proc_ID: [],
    internal_NO: [],
    product: [],
    accnt_CCY: [],
    city: [],
    card_ACCT: [],
    country: [],
    tran_AMT: [],
    card: [],
    ref_NUMBER: [],
    tran_TYPE: [],
    record_TYPE: [],
    deb_CRED: [],
    mcc_CODE: [],
    iss_MFO: [],
    slip_NR: [],
    deal_DESC: [],
    state_ID: [],
  })

  constructor(

    public loadingService: LoadingService,
    private apiServices: ApiService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getExptTransactions()
  }

  parseData(data: any){
    this.exptForm.patchValue({
      stat: data.stat_,
      err: data.err_,
      file: data.file_,
      id: data.id,
      term_ID: data.term_ID,
      tranz_ACCT: data.tranz_ACCT,
      tran_AMT2: data.tran_AMT2,
      tran_TYPE2: data.tran_TYPE2,
      tran_DATE_TIME: data.tran_DATE_TIME,
      empc_FILE_ID: data.empc_FILE_ID,
      tran_CCY: data.tran_CCY,
      line_NUMBER: data.line_NUMBER,
      rec_DATE: data.rec_DATE,
      post_DATE: data.post_DATE,
      client: data.client,
      accnt_AMT: data.accnt_AMT,
      terminal: data.terminal,
      merchant: data.merchant,
      abvr_NAME: data.abvr_NAME,
      proc_ID: data.proc_ID,
      internal_NO: data.internal_NO,
      product: data.product,
      accnt_CCY: data.accnt_CCY,
      city: data.city,
      card_ACCT: data.card_ACCT,
      country: data.country,
      tran_AMT: data.tran_AMT,
      card: data.card,
      ref_NUMBER: data.ref_NUMBER,
      tran_TYPE: data.tran_TYPE,
      record_TYPE: data.record_TYPE,
      deb_CRED: data.deb_CRED,
      mcc_CODE: data.mcc_CODE,
      iss_MFO: data.iss_MFO,
      slip_NR: data.slip_NR,
      deal_DESC: data.deal_DESC,
      state_ID: data.state_ID,
    })
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  getExptTransactions() {
    this.apiServices.exptTransactions().subscribe((res) => {
      this.exptTransactionsList = res;


    })
  }

  itemInfo(item: any){
    this.isVisible = true;
    this.exptTransaction = item
    this.parseData(item)
    // Utils.setToSessionStorage('exptItem', item)

  }

}
