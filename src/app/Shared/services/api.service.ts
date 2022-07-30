import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Api} from "../consts/consts";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  updateStates(){
    return this.http.get(Api + 'updateStatus')
  }

  operType(body: any){
    return this.http.post(Api + 'insertInto', body)
  }

  allEpos(): Observable<any>{
    return this.http.get(Api + 'findAlls')
  }

  findEpos(data: any): Observable<any>{
    return this.http.get(Api + `findEposInfo?terminal=${data}`)
  }

  editEpos(body: any){
    return this.http.post(Api + 'updateEposs', body)
  }

  deleteEpos(body: any){

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: body
    };
    return this.http.delete<any>(Api + 'deleteEpos', options)
  }

  exptTransactions(): Observable<any>{
    return this.http.get(Api + 'ExptTransactions')
  }


  bTransactions(): Observable<any>{
    return this.http.get(Api + 'BTransactions')
  }

  scanFile(file: any){
    const httpOptions = {
      headers: new HttpHeaders({
        accept: '*/*',
        contentType: 'application/json',
      }),
      responseType: 'text',
    };
    // @ts-ignore
    return this.http.post<any>(Api + 'scanCSVFile', file, httpOptions)
  }

}
