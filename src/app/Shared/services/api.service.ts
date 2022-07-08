import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Api} from "../consts/consts";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  operType(body: any){
    return this.http.post(Api + 'insertInto', body)
  }

  allEpos(): Observable<any>{
    return this.http.get(Api + 'findAlls')
  }

  editEpos(body: any){
    return this.http.post(Api + 'updateEposs', body)
  }

  deleteEpos(body: any){
    console.log(body)
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: body
    };
    return this.http.delete<any>(Api + 'deleteEpos', options)
  }
}